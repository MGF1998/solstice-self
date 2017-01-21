const Discord = require("discord.js");
const settings = require("./settings");
const parseCommands = require("./methods/parseCommands");
const commands = require("./data/commands");
const bot = new Discord.Client();

bot.on("message", msg => {
    // Make the bot only work for you. DO NOT DELETE THIS LINE. You will get in trouble if you use open selfbots! Consider getting the Solstice bot, instead.
    // https://github.com/MGF1998/SolsticeBot 
    if (msg.author !== bot.user) {return;} 
    if (msg.content.startsWith(settings.prefix)) { //Did you write a message that starts with the set prefix?
        let call = parseCommands(msg.content.substring(settings.prefix.length)); 
        if (commands.hasOwnProperty(call.name)) {
            console.log("Called command "+call.name);
            let fn = commands[call.name].function;
                if (typeof fn === 'function') { //Is the function that executes the command available?
                    let args = call.args;
                    let options = {
                        "callname": call.name, //eventually used for aliases
                        "settings": settings,
                    };
                    fn(bot, msg, args, options);
                } else { //Function not found
                    console.log("Command was found - the function wasn't");
                }
        } else {
            console.log("You called a command that doesn't exist... "+call);
        }
    }
});

bot.on("ready", () => {
    console.log("Solstice-Self ready to rock-n-roll.");
});

bot.login(settings.user_token);