const method_setGame = require("./../methods/setGame");
module.exports = function(bot,msg,args,options){
    if (!args[0]){
        msg.edit("`Your game currently is "+bot.user.presence.game.name+"`");
        msg.delete(3000);
    } else {
        if (args[0] === "reset" || "null") {
            bot.user.setGame(null);
            console.log("Attempting to clear game status.");
            msg.edit("`Resetting your game.`");
            msg.delete(3000);
        } else {
            method_setGame(bot,args[0]);
            msg.edit("`Attempting to change game to "+bot.user.presence.game.name+"`");
            msg.delete(3000);
        }
    }
};