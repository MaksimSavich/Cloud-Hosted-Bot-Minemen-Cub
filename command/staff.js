const Discord = require("discord.js");

module.exports = {

  config: {
      name: "staff",
      description: "staff help",
      usage: "^staff",
      accesability: "mod",
      aliases: ["staffhelp"]
    },
  
    run: async (client, message, args) => {
  
  if((message.channel.id === `587465808200990730`) || (message.channel.id === `611070268810592296`)) {

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
    }
}