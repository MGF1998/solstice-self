module.exports = function (bot,msg,args,options) {
    if (args[1] === "cancer" || args[1] === "letter") {
        msg.edit(args[0].split("").map(i=>i+":clap:").join("")).catch(err => {console.log(err)});
    } else {
        msg.edit(args[0].split(" ").join(":clap:")).catch(err => {console.log(err)});
    }
}