const setGame = require("./../methods/setGame");
module.exports = function(bot,msg,args,options){
    if (!args[0]){
        msg.edit("`Your game currently is "+bot.user.presence.game.name+"`");
        msg.delete(3000);
    } else {
        setGame(bot,args[0]);
        msg.edit("`Attempting to change game to "+bot.user.presence.game.name+"`");
        msg.delete(3000);
    }
};