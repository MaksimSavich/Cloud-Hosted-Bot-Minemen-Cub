const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let usermessage = args.contain(`**${message}**`)
  let userrmessage = args.join("-")

  let userembed = new Discord.RichEmbed()

  .setColor("#af7ac5")
  .setFooter(`<@${message.author.id}>`)
  .setTimestamp()
  .addField(usermessage, userrmessage);

  return message.channel.send(userembed);

}

module.exports.help = {
  name: "a"
}
