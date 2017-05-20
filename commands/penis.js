module.exports = function(bot,msg,args,options){
    let amt = Number(args[0]);
    if (isNaN(amt)) {
        msg.edit("that's not a number, you dick");
    } else {
        for (let i=0; i<amt; i++) {
            let penis = setTimeout(()=>{msg.channel.send("penis");},1000);
        }
    }
};