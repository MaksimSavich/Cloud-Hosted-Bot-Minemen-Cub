const Discord = require("discord.js");

module.exports.run = async (client, message, args, tools) => {

  const embed = new Discord.RichEmbed()
    .setTitle("Member")
    .setAuthor("Minemen Cub | Member Help", client.user.avatarURL)
    
    .setColor("#af7ac5")
    .setDescription("``\n^help, ^serverinfo, ^report \n``")


    message.channel.send({embed});

  message.delete().catch(O_o=>{});
}
