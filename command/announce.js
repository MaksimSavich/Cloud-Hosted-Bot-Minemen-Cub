const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  let usermessage = args.join(" ")
  let userrmessage = args.join(" **""**")

  let userembed = new Discord.RichEmbed()
  .setTitle(userrmessage)
  .setDescription(usermessage)
  .setColor("#af7ac5")
  .setfooter(message.author.username)
  .setTimestamp();

  return message.channel.send(userembed);
}

module.exports.help = {
  name: "a"
}
