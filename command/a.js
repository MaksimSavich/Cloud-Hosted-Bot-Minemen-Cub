const Discord = require(`discord.js`);

exports.run = async (client, message, args, tools) => {

  let sayRole = message.guild.roles.find("name", "• say •");
    if(message.member.roles.has(sayRole.id)){
  
  let split = (`~`)
  let usermessage = args.join(" ")
  let title = args.join(" ").slice(22).split();
  let userembed = new Discord.RichEmbed()
  .setColor("#af7ac5")
  .setTimestamp()
  .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
  .addField((title), (usermessage));

    message.delete().catch(O_o=>{});

  return message.channel.send(userembed)

  }
}
