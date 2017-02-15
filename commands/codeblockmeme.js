module.exports = function(bot,msg,args,options){
    let output = "```\n";
    let temp = "";
    for (let i=0;i<args[0].length;i++){
        temp = temp.concat(args[0][i]+" ");
    }
    output = output.concat(temp,"\n");
    for (let i=1; i<args[0].length-1;i++){
        temp = args[0][i]+" ".repeat((args[0].length*2)-3)+args[0][args[0].length-i-1];
        output = output.concat(temp,"\n");
    }
    output = output.concat(args[0].split("").reverse().join(" "),"\n");
    output = output.concat("```");
    msg.edit(output).catch(err => {console.log(err)});
}