module.exports = function(bot,msg,args,options){
    let target;
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
        time.raw = (target.getTime()-now.getTime())/1000;
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
            case "long":
                newStatus = time.d+" days "+time.h+" hours "+time.m+" mins";
                if (string) {newStatus += " "+string;}
                break;
            case "daysonly":
            case "days":
                newStatus = (time.d+1)+" days";
                if (string) {newStatus += " "+string;}
                break;
            case "inverse":
            case "string_first":
            case "stringfirst":
                if (string) {newStatus = string;}
                newStatus += time.d+"d"+time.h+"h"+time.m+"m";
                break;
            case "inverselong":
            case "string_first_long":
            case "stringfirstlong":
                if (string) {newStatus = string;}
                newStatus += time.d+" days "+time.h+" hours "+time.m+" minutes";
                break;
            case "inversedays":
            case "stringfirstdays":
                if (string) {newStatus = string;}
                newStatus += (time.d+1)+" days";
                break;
            case "inversehrs":
            case "stringfirsthrs":
                if (string) {newStatus = string;}
                newStatus += time.d+" days, "+time.h+" hours";
                break;
            default: 
                newStatus = time.d+"d"+time.h+"h"+time.m+"m";
                if (string) {newStatus += " "+string;}
                break;
        }
        let currentStatus = bot.user.presence.game;
        if (newStatus !== undefined) {
            if (currentStatus === null || currentStatus.name !== newStatus) {
                bot.user.setGame(newStatus).then(() => console.log("Status updated: "+newStatus)).catch(err => console.log(err));
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
        if (bot.globalVars.interval) {
            msg.edit("`Stopping countdown, resetting your game.`");
            if (options.settings.deleteMsgs) {
                msg.delete(2000);
            }
            clearInterval(bot.globalVars.interval);
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
            bot.globalVars.interval = setInterval(refresh,10000);
        }
    }
};