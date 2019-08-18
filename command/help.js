const Discord = require("discord.js");

module.exports.run = async (client, message, args, tools) => {

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
  message.member.send("Please use commands in the bot commands channel!" , message.delete().catch(O_o=>{}));
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