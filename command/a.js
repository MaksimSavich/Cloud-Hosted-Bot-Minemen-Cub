const Discord = require(`discord.js`);

exports.run = async (client, message, args, tools) => {

  let sayRole = message.guild.roles.find("name", "• say •");
    if(message.member.roles.has(sayRole.id)){
  
  let split = (`~`)
  let args = args.join(` `).split(split);
  let userembed = new Discord.RichEmbed()
  .setColor("#af7ac5")
  .setTimestamp()
  .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
  .addField((args[0]), (args[1]));

    message.delete().catch(O_o=>{});

  return message.channel.send(userembed)

  }
}

