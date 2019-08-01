const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  let sayRole = message.guild.roles.find("name", "• say •");
  if(!message.member.roles.has(sayRole.id)) return message.delete().catch(O_o=>{}), message.member.send("You can't perform this action!");

  if(message.member.roles.has(sayRole.id)){

      let botmessage = args.join(" ");
      message.delete().catch();
      message.channel.send(botmessage);

        message.delete().catch(O_o=>{});

  }

}

exports.help = {
  name: "announce", description: "announces what you say.", usage: "^announce" , alias: ['sa']
  }