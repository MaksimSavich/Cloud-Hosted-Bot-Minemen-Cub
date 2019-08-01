const Discord = require("discord.js");

module.exports.run = async (client, message, args, tools) => {
   
    let roleRole = message.guild.roles.find("name", "• bigfun •");
    if(!message.member.roles.has(roleRole.id)) return message.member.send(`NO BIGFUN FOR YOU!!!`) , message.delete().catch(O_o=>{});
    if(message.member.roles.has(roleRole.id)){

    message.member.send("https://rule34.xxx/index.php?page=post&s=view&id=3312363");

    
    }
  
    message.delete().catch(O_o=>{});

}

exports.help = {
    name: "announce", description: "announces what you say.", usage: "^announce" , alias: ['bf']
    }