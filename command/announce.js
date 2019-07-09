const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  let usermessage = args.join(" ")
  let userrmessage = args.join("*")

  let userembed = new Discord.RichEmbed()
  .setTitle(userrmessage)
  .setDescription(botmessage)
  .setColor("#af7ac5")

  .setTimestamp();

  return message.channel.send(userembed);
}

module.exports.help = {
  name: "a"
}
