const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let staffRole = message.guild.roles.find("name", "• staff •");
  if(message.member.roles.has(staffRole.id)){

  let bicon = client.user.displayiconUrl;
  let botembed = new Discord.RichEmbed()
  .setAuthor("Minemen Cub | Staff Help", client.user.avatarURL)
  .setColor("#af7ac5")
  .setThumbnail(bicon)
  .addField("Staff Command List", display = "^clear |^tempmute | ^report | ^kick | ^ban");

  message.delete().catch(O_o=>{});
  return message.member.send(botembed);
  }
}
module.exports.config = {
  name: "helpstaff",
  aliases: ["hs"]
}
