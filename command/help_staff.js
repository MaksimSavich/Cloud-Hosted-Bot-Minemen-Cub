const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let staffRole = message.guild.roles.find("name", "• staff •");
  if(message.member.roles.has(staffRole.id)){

  let bicon = bot.user.displayiconUrl;
  let botembed = new Discord.RichEmbed()
  .setTitle("__Bot Commands__")
  .setColor("#af7ac5")
  .setThumbnail(bicon)
  .addField("Staff Command List", display = "^staffhelp | ^kick | ^ban");


  return message.member.send(botembed);
  }
}

module.exports.help = {
  name: "help staff"
}
