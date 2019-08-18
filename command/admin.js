const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  if(!(message.channel.id === `587465808200990730`) || (message.channel.id === `611070268810592296`)){
    const sembed = new Discord.RichEmbed()
    .setAuthor("Minemen Cub | Help", client.user.avatarURL)
    .setColor("#af7ac5")
    .setTitle("Please use commands in the **bot commands** channel!")
    .setThumbnail(client.user.avatarURL)
    .setFooter("#bot-commands");
  
    message.delete().catch(O_o=>{});
    message.member.send(sembed);
  } 
  if((message.channel.id === `587465808200990730`) || (message.channel.id === `611070268810592296`)) {
  
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
}