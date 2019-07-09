const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



  let userembed = new Discord.RichEmbed()
  .setDescription(message.author.send)
  .setColor("#af7ac5");

  return message.channel.send(userembed);
}

module.exports.help = {
  name: "testembed"
}
