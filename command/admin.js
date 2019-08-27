const {RichEmbed} = require("discord.js");
const {fetch} = require("node-fetch");

module.exports = {

config: {
    name: "admin",
    description: "admin help",
    usage: "^admin",
    accesability: "admin",
    aliases: ["adminhelp"]
  },

  run: async (client, message, args) => {
  
    if((message.channel.id === `587465808200990730`) || (message.channel.id === `611070268810592296`)) {
    
    let adminRole = message.guild.roles.find("name", "• Admin •");
    let ownerRole = message.guild.roles.find("name", "• Owner •");
 
    
    if(message.member.roles.has(adminRole.id) || message.member.roles.has(ownerRole.id)){

    let bicon = client.user.displayiconUrl;
    let botembed = new RichEmbed()
    .setAuthor("Minemen Cub | Staff Help", client.user.avatarURL)
    .setColor("#af7ac5")
    .addField("Admin Command List", display = "``\n^announce | ^say | ^blacklist | ^giverole | ^removerole\n``")
    .addField("Music Commands", display = "``\n^play | ^leave | ^skip | ^volume\n``")

    message.delete().catch(O_o=>{});
    return message.member.send(botembed);
       } 
      
    }
  }
}
