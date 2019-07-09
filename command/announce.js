const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let usermessage = args.join(" ")
  

  let userembed = new Discord.RichEmbed()
  .setDescription(usermessage)
  .setColor("#af7ac5")
  .setFooter(`<@${message.author.id}>`)
  .setTimestamp();

  return message.channel.send(userembed);

}

module.exports.help = {
  name: "a"
}
