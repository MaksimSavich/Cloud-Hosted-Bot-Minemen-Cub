const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let adminRole = message.guild.roles.find("name", "• Admin •");
  let ownerRole = message.guild.roles.find("name", "• Owner •");
  if(message.member.roles.has(adminRole.id) || message.member.roles.has(ownerRole.id)){

  let bicon = client.user.displayiconUrl;
  let botembed = new Discord.RichEmbed()
  .setAuthor("Minemen Cub | Staff Help", client.user.avatarURL)
  .setColor("#af7ac5")
  .addField("Admin Command List", display = "``\n^announce | ^say | ^blacklist | ^giverole | ^removerole\n``")
  

  message.delete().catch(O_o=>{});
  return message.member.send(botembed);
  }
}