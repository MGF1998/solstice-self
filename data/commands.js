const help = require("./../commands/help");
const changeavy = require("./../commands/changeavy");
const changegame = require("./../commands/changegame");

module.exports = {
    changegame: {
        function: changegame,
        hidden: false,
        help: {
            text: "Sets your game appearance.",
            indepth: "If no arguments are provided, returns your current game. Else, it sets the game.",
            args: "[string]",
        },
        aliases: ["changegame","setgame","game"],
    },
    changeavy : {
        function: changeavy,
        hidden: false,
        help: {
            text: "Change your avatar.",
            indepth: "Changes your avatar to either a random file in /data/avys or to the specified avy. Use list to get a list.",
            args: "[file or 'list']",
        },
        aliases: ["avy","changeavy","setavy"],
    },
    help: {
        function: help,
        hidden: false,
        help: {
            text: "Show commands & indepth help",
            indepth: "Pass it a command name, and you shall recieve!",
            args: "[command]",
        },
        aliases: ["help"],
    },
};