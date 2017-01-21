const help = require("./../commands/help");

module.exports = {
    help: {
        function: help,
        hidden: false,
        help_text: "Show commands & indepth help",
        help_indepth: "Pass it a command name, and you shall recieve!",
        help_args: "[command]",
        help_aliases: false,
    },
};