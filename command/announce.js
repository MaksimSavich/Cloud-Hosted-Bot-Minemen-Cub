const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(cmd === `${prefix}a`){

  let usermessage = args.join(" ")

  let userembed = new Discord.RichEmbed()
  .setTitle(usermessage)
  .setColor("#af7ac5")
  .setfooter(message.author.username)
  .setTimestamp();

  return message.channel.send(userembed);
  }
}
