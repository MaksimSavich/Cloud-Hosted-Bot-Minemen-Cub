const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let sayRole = message.guild.roles.find("name", "• say •");
  if(!message.member.roles.has(sayRole.id)) return return message.member.send("You can't perform this action!");
  if(message.member.roles.has(sayRole.id)){
      let bot message = args.join(" ");
      message.delete().catch();
      message.channel.send(botmessage);

  }

}

module.exports.help = {
  name: "say"
}
