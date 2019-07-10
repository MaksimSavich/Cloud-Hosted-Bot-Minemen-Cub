const Discord = require(`discord.js`);

exports.run = async (client, message, args, tools) => {

  let sayRole = message.guild.roles.find("name", "• say •");
    if(message.member.roles.has(sayRole.id)){

  let usermessage = args.join(" ")

  let userembed = new Discord.RichEmbed()
  .setColor("#af7ac5")
  .setTimestamp()
  .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
  .addField('Announcement', (usermessage));

  return message.channel.send(userembed)

    message.delete().catch(O_o=>{});

  }
}
