const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bicon = bot.user.displayiconUrl;
  let timestamp = date.now();
  let botembed = new Discord.RichEmbed()
  .setTitle("__Bot Commands__")
  .setColor("#af7ac5")
  .setThumbnail(bicon)
  .addField("Command List", display = "^help | ^serverinfo | ^report | ^help staff")
  .setTimestamp(timestamp);

  return message.channel.send(botembed);
}

module.exports.help = {
  name: "testembed"
}
