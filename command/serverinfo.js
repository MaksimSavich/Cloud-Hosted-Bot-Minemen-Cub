const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.displayiconUrl;
  let serverembed = new Discord.RichEmbed()
  .setTitle("__Server Information__")
  .setColor("#af7ac5")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addFiel(clientCreatedOn, message.guild.createdAt)
  .addField("Total Members", message.guild.memberCount);

  return message.channel.send(serverembed);
}

module.exports.help = {
  name: "serverinfo",
  alias: ["s"]
}
