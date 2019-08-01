const Discord = require("discord.js");

exports.run = async (client, message, args, tools) => {

  const embed = new Discord.RichEmbed()
    .setTitle("Member")
    .setAuthor("Minemen Cub | Help", client.user.avatarURL)
    
    .setColor("#af7ac5")
    .setDescription("``\n^help member\n``")


    .addField("Staff",
      "``\n^help staff\n``")

    message.channel.send({embed});

}
exports.conf = {
  alias: ['h']
  };
exports.help = {
  name: "announce", description: "announces what you say.", usage: "^announce"
  }