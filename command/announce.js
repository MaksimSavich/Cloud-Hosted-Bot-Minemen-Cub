const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let user = message.author.id
  let usermessage = args.join(" ")

  let userembed = new Discord.RichEmbed()
  .setTitle(usermessage)
  .setColor("#af7ac5")
  .setFooter(`<@${user.id}>`)
  .setTimestamp();

  return message.channel.send(userembed);

}

module.exports.help = {
  name: "a"
}
