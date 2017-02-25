//This command uses Untamed Now Playing. It's an addon for firefox which creates a few text files based on the stuff you're watching/listening to.
//Get it here: https://github.com/Wykks/Untamed-Now-Playing-Next
//I might add support for other stuff like this, but for now, only UNP is supported.
module.exports = function(bot,msg,args,options) {
    if (options.settings.unp_directory) {


    } else {
        msg.edit("You disabled this feature, or the directory you entered returned as falsy. Define a (valid) directory in settings.js.");
        if (options.settings.deleteMsgs) {
            msg.delete("10000");
        }
    }
};