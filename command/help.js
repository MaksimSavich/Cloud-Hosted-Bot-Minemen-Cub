const Discord = require("discord.js");

module.exports.run = async (client, message, args, tools) => {

  if((message.channel.id === `587465808200990730`) || (message.channel.id === `611070268810592296`)) {


let people = message.guild.members.filter(member => !member.user.bot).size;
let Bots = message.guild.members.filter(member => member.user.bot).size;

  const embed = new Discord.RichEmbed()
    .setAuthor("Minemen Cub | Help", client.user.avatarURL)
    
    .setColor("#af7ac5")
    .setTitle(`Members: ${people} \nBots: ${Bots}\n`)
    
    .addField("Member:" , "``\n^member\n``")
    .addField("Staff:", "``\n^staff\n``");

    message.channel.send({embed});

}
}
module.exports.config = {
  name: "help",
  aliases: ["h"]
};