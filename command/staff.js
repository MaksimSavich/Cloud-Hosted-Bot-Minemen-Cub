const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let staffRole = message.guild.roles.find("name", "• staff •");
  if(message.member.roles.has(staffRole.id)){

  let bicon = client.user.displayiconUrl;
  let botembed = new Discord.RichEmbed()
  .setAuthor("Minemen Cub | Staff Help", client.user.avatarURL)
  .setColor("#af7ac5")
  .addField("Staff Command List", display = "``\n^clear | ^report |^tempmute | ^kick | ^ban\n``")
  .addField(`Admin Help: ` , "``\n^admin\n``");

  message.delete().catch(O_o=>{});
  return message.member.send(botembed);
  }
}
module.exports.config = {
  name: "helpstaff",
  aliases: ["hs"]
}
