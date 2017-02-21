const Discord = require("discord.js");
const bot = new Discord.Client();
const settings = require("./settings");
const parseCommands = require("./methods/parseCommands");
const commands = require("./data/commands");
const commandKeys = Object.keys(commands); 
bot.globalVars = {
    interval: null,
};

const commandCheck = function(call) {
    for (let i = 0; i < commandKeys.length; i++) {
        if (commands[commandKeys[i]].aliases.indexOf(call.name.toLowerCase()) > -1) {
                return commands[commandKeys[i]];
            }
        }
        //If the function didn't return early / quit the for loop
        return false;
};

bot.on("message", msg => {
    // Make the bot only work for you. DO NOT DELETE THIS LINE. You will get in trouble if you use open selfbots! Consider getting the Solstice bot, instead.
    // https://github.com/MGF1998/SolsticeBot 
    if (msg.author !== bot.user) {return;} 
    if (msg.content.startsWith(settings.prefix)) { //Did you write a message that starts with the set prefix?
        let call = parseCommands(msg.content.substring(settings.prefix.length));
        let command_id = commandCheck(call);
        if (command_id) {
            let fn = command_id.function;
            if (typeof fn === "function") {
                let args = call.args;
                let options = {
                    "callname": call.name,
                    "settings": settings,
                };
                fn(bot, msg, args, options);
            }
        }
    }
});

bot.on("ready", () => {
    console.log("Solstice-Self ready to rock-n-roll.");
});

bot.login(settings.user_token);