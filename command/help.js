const Discord = require("discord.js");

module.exports.run = async (vor, message, args) => {
  let bicon = bot.user.displayiconUrl;
  let botembed = new Discord.RichEmbed()
  .setTitle("__Bot Commands__")
  .setColor("#af7ac5")
  .setThumbnail(bicon)
  .addField("Command List", display = "^help | ^serverinfo | ^report | ^help staff");


  return message.channel.send(botembed);
}

module.exports.help = {
  name: "help"
}
