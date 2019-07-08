const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let botembed = new Discord.RichEmbed()
  .setTitle("__Bot Commands__")
  .setColor("#af7ac5")
  .setThumbnail(bot.message.avatarURL)
  .addField("Command List", display = "^help | ^serverinfo | ^report | ^help staff");


  return message.channel.send(botembed);
}

module.exports.help = {
  name: "help"
}
