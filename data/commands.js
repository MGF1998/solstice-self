const help = require("./../commands/help");
const changeavy = require("./../commands/changeavy");
const changegame = require("./../commands/changegame");

module.exports = {
    setgame: {
        function: changegame,
        hidden: false,
        help_text: "Sets your game appearance.",
        help_indepth: "If no arguments are provided, returns your current game. Else, it sets the game.",
        help_args: "[string]",
        help_aliases: "changegame, game",
    },
    changegame: {
        function: changegame,
        hidden: true,
        help_text: "Sets your game appearance.",
        help_indepth: "If no arguments are provided, returns your current game. Else, it sets the game.",
        help_args: "[string]",
        help_aliases: "setgame, game",
    },
    game: {
        function: changegame,
        hidden: true,
        help_text: "Sets your game appearance.",
        help_indepth: "If no arguments are provided, returns your current game. Else, it sets the game.",
        help_args: "[string]",
        help_aliases: "changegame, setgame",
    },
    changeavy : {
        function: changeavy,
        hidden: false,
        help_text: "Change your avatar.",
        help_indepth: "Changes your avatar to either a random file in /data/avys or to the specified avy. Use list to get a list.",
        help_args: "[file or 'list']",
        help_aliases: "avy",
    },
    avy : {
        function: changeavy,
        hidden: true,
        help_text: "Change your avatar.",
        help_indepth: "Changes your avatar to either a random file in /data/avys or to the specified avy. Use list to get a list.",
        help_args: "[file or 'list']",
        help_aliases: "changeavy",
    },
    help: {
        function: help,
        hidden: false,
        help_text: "Show commands & indepth help",
        help_indepth: "Pass it a command name, and you shall recieve!",
        help_args: "[command]",
        help_aliases: false,
    },
};