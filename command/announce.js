const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let usermessage = args.join(" ")


  let userembed = new Discord.RichEmbed()

  .setColor("#af7ac5")
  .setFooter(`<@${message.author.id}>`)
  .setTimestamp()
  .addField(usermessage);

  return message.channel.send(userembed);

}

module.exports.help = {
  name: "a"
}
