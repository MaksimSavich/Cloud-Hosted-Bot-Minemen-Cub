const Discord = require("discord.js");

module.exports.run = async (client, message, args, tools) => {

  if((message.channel.id === `587465808200990730`) || (message.channel.id === `611070268810592296`)) {

  const embed = new Discord.RichEmbed()
    .setTitle("Member Command List")
    .setAuthor("Minemen Cub | Member Help", client.user.avatarURL)
    
    .setColor("#af7ac5")
    .setDescription("``\n^help | ^report | ^ping | ^level \n``")


    message.channel.send({embed});

  message.delete().catch(O_o=>{});
  }
}
module.exports.config = {
  name: "helpmember",
  aliases: []
}