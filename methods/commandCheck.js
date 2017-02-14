module.exports = function(call) {
    for (let i = 0; i < commandKeys.length; i++) {
        if (commands[commandKeys[i]].aliases.indexOf(call.name.toLowerCase()) > -1) {
            return commands[commandKeys[i]];
        }
    }
    //If the function didn't return early / quit the for loop
    return false;
};