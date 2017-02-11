module.exports = function (bot, msg, args, options) {
    let avylist = require("./../data/avys/avylist.js");
    if (!args[0]) { 
        let random = Math.floor(Math.random() * Object.keys(avylist).length);
        console.log(random);
        console.log("Random avys coming soon");
    } else if (args[0] === "list") {
        console.log(avylist);
        if (options.settings.deleteMsgs) {
            msg.delete(2000);
        }
    } else if (avylist.hasOwnProperty(args[0])) {
        bot.user.setAvatar(avylist[args[0]].url)
            .then( () => {
                console.log("Avatar changed to "+args[0]);
                msg.edit("`"+avylist[args[0]].desc+"`");
                if (options.settings.deleteMsgs) {
                    msg.delete(2000);
                }
            })
            .catch(console.error);
    } else {
        console.log("Unknown arguments.");
    }
}