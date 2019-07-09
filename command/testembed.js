const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  let footurl = message.author.avatarURL;
  let botembed = new Discord.RichEmbed()
  .setTitle("This is a test!")
  .setThumbnail(message.author.iconURL)
  .setfooter(`Hi!`)

  return message.channel.send(botembed);
}

module.exports.help = {
  name: "testembed"
}
