const Discord = require("discord.js");

module.exports.run = async (client, message, args, tools) => {

  let sayRole = message.guild.roles.find("name", "• say •");
    if(!message.member.roles.has(sayRole.id)) return message.delete().catch(O_o=>{}), message.member.send("You can't perform this action!");

  let usermessage = args.join(" ")

  let userembed = new Discord.RichEmbed()

  .setColor("#af7ac5")
  .setFooter(message.author.displayAvatarURL, `${message.author.tag}`)
  .setTimestamp()
  .addField("**Announcement**", usermessage);

  return message.channel.send(userembed);

  message.delete().catch(O_o=>{});

}

module.exports.help = {
  name: "a"
}
