const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



  let userembed = new Discord.RichEmbed()
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);

  return message.channel.send(userembed);
}

module.exports.help = {
  name: "testembed"
}
