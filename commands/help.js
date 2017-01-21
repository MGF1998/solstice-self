const Discord = require("discord.js");
const eachObject = require("./../methods/eachObject");

module.exports = function (bot, msg, args, options) {
    const commands = require("../data/commands"); //needs to be placed in fn to avoid timing issues
    let reply = [];
    if (args[0]) { //Command was specified
        if (commands.hasOwnProperty(args[0])) { //...and command exists
            let embed = new Discord.RichEmbed();
            embed.setAuthor("Solstice Self Help | " + args[0], "http://truemgf.de/images/lightbulb_self_discord.png");
            embed.setColor([255, 0, 75]);
            embed.setTitle("TL;DR:");
            embed.setDescription(commands[args[0]].help_indepth);
            if (commands[args[0]].help_args) {
                embed.addField("Arguments", commands[args[0]].help_args);
            } else {
                embed.addField("Arguments", "This command takes no arguments.");
            }
            if (commands[args[0]].help_aliases) {
                embed.addField("Aliases", commands[args[0]].help_aliases);
            } else {
                embed.addField("Aliases", "This command has no aliases.");
            }
            msg.channel.sendEmbed(embed);
        } else { //specified command does not exist
            msg.channel.sendMessage("`" + args[0] + "` is not a valid command.");
        }
    } else { // No command specified, list all commands that are not hidden
        eachObject(commands, (command,key) => {
            if (!command.hidden) {
                reply.push(key, " ".repeat(15 - key.length), command.help_text, "\n");
            }
        });
        msg.channel.sendMessage("```" + reply.join("") + "```");
    }
};