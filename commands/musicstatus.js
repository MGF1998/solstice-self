//This command uses Untamed Now Playing. It's an addon for firefox which creates a few text files based on the stuff you're watching/listening to.
//Get it here: https://github.com/Wykks/Untamed-Now-Playing-Next
//I might add support for other stuff like this, but for now, only UNP is supported.
const fs = require("fs");
module.exports = function(bot,msg,args,options) {

    const refresh = function() {
        let result = "";
        const artist = new Promise((resolve,reject) => {
            fs.readFile(options.settings.unp_directory+"/unp_artist_name.txt","utf-8",(err,data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
        const title = new Promise((resolve,reject)=> {
            fs.readFile(options.settings.unp_directory+"/unp_track_name.txt","utf-8",(err,data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            }); 
        });
        Promise.all([title,artist])
            .then(results => {
                result = `🎶 ${results[0]} - ${results[1]}`;
                let currentStatus = bot.user.presence.game;
                if (currentStatus === null || currentStatus.name !== result) {
                    bot.user.setGame(result).then(() => console.log("Status updated: "+result)).catch(err => console.log(err));
                }
            })
            .catch(err => console.log(err));
    };

    if (options.settings.unp_directory) {
        if (bot.globalVars.game_interval) { //Interval running. (could theoretically also include the gamecountdown.)
            clearInterval(bot.globalVars.game_interval);
            bot.globalVars.game_interval = null;
            bot.user.setGame(null);
            msg.edit("`Stopping refresh check, resetting your game.`");
            if (options.settings.deleteMsgs) {
                msg.delete("3000");
            }
        } else {
            bot.globalVars.game_interval = setInterval(refresh, 10000);
            msg.edit("`Attempting to listen to UNP changes.`");
            if (options.settings.deleteMsgs) {
                msg.delete("3000");
            }
        }
    } else {
        msg.edit("`You disabled this feature, or the directory you entered returned as falsy. Define a (valid) directory in settings.js.`");
        if (options.settings.deleteMsgs) {
            msg.delete("10000");
        }
    }
};
