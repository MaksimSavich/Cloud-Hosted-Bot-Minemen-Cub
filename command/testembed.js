const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



  let userembed = new Discord.RichEmbed()
  let botmessage = args.join(" ");
  .setTitle("")
  .setDescription(message.channel.send(botmessage))
  .setColor("#af7ac5");

  return message.channel.send(userembed);
}

module.exports.help = {
  name: "testembed"
}
