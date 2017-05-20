module.exports = function(bot,msg,args,options){
    if (typeof args[0] !== "number") {
        msg.edit("that's not a number, you dick");
    } else {
        for (let i=0; i<args[0]; i++) {
            let penis = setTimeout(()=>{msg.channel.send("penis");},1000);
        }
    }
};