module.exports = function(bot,msg,args,options){
    let interval;
    if (!args[0]) {
        msg.edit("`No arguments provided.`");
         if (options.settings.deleteMsgs) {
                msg.delete(2000);
        }
        return;
    }
    if (args[0] === "clear") {
        if (interval) {
            clearInterval(interval);
        } else {
            msg.edit("`No timer running.`");
            if (options.settings.deleteMsgs) {
                msg.delete(2000);
            }
        }
    } else {
        let target = new Date(args[0]);
        console.log(target);
    }
};