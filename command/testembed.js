const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  let botmessage = args.save(" ")

  let userembed = new Discord.RichEmbed()
  .setAuthor(message.channel.send(botmessage))
  .setColor("#af7ac5");

  return message.channel.send(userembed);
}

module.exports.help = {
  name: "testembed"
}
