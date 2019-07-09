const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  let botmessage = args.join(" ")

  let userembed = new Discord.RichEmbed()
  .setDescription(botmessage)
  .setColor("#af7ac5");

  return message.channel.send(userembed);
}

module.exports.help = {
  name: "testembed"
}
