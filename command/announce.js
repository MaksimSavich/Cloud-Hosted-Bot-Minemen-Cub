const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let user = message.author.id || message.author.get(args[0]);
  let usermessage = args.join(" ")

  let userembed = new Discord.RichEmbed()
  .setTitle(usermessage)
  .setColor("#af7ac5")
  .setfooter(message.author(`<@${user.id}>`))
  .setTimestamp();

  return message.channel.send(userembed);

}

module.exports.help = {
  name: "a"
}
