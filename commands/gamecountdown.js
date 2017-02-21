module.exports = function(bot,msg,args,options){
    let interval,target;
    let time = {
        raw: 0,
        d: 0,
        h: 0,
        m: 0,
    };
    let display = { //For comparison purposes.
        d: 0,
        h: 0,
        m: 0,
    };
    const refresh = function() {
        let now = new Date();
        time.raw = (now.getTime()-target.getTime())/1000;
        time.d = Math.floor(time.raw/86400);
        time.h = Math.floor((time.raw%86400)/3600);
        time.m = Math.floor((time.raw%3600)/60);
        if (time.d !== display.d || time.h !== display.h || time.m !== display.m) {
            display.d = time.d;
            display.h = time.h;
            display.m = time.m;
            updateGame();
        }
    };

    const updateGame = function() {
        let mode = args[1];
        let string = args[2];
        let newStatus;
        switch (mode) {
            case "1":
                newStatus = time.d+"days, "+time.h+"hours, "+time.m+"mins";
                if (string) {newStatus += " "+string;}
                break;
            default: 
                newStatus = time.d+"d"+time.h+"h"+time.m+"m";
                if (string) {newStatus += " "+string;}
                break;
        }
        let currentStatus = bot.user.presence.game;
        if (newStatus !== undefined) {
            if (currentStatus === null || currentStatus.name !== newStatus) {
                bot.user.setGame(newStatus).then(ret => console.log("Status updated: "+newStatus+" "+ret)).catch(err => console.log(err));
            }
        } else {
            console.log("Error - newStatus returned undefined.");
        }
    }

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
            bot.user.setGame(null);
        } else {
            msg.edit("`No timer running.`");
            if (options.settings.deleteMsgs) {
                msg.delete(2000);
            }
        }
    } else {
        target = new Date(args[0]);
        if (isNaN(target.getTime())) {
            msg.edit("`Date check failed | getTime() returned NaN.`");
            return;
        } else {
            msg.edit("`Counting down to "+target+". To stop/abort, use "+options.settings.prefix+"countdown clear`");
            if(options.settings.deleteMsgs) {
                msg.delete(3000);
            }
            interval = setInterval(refresh,10000);
        }
    }
};