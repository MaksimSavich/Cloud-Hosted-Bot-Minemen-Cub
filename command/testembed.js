const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



  let botembed = new Discord.RichEmbed()

  return message.channel.send(botembed);
}

module.exports.help = {
  name: "testembed"
}
