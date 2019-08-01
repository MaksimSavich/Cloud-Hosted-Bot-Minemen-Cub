const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  let banRole = message.guild.roles.find("name", "• ban •");
  if(message.member.roles.has(banRole.id)){

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.member.send("Can't find user!", message.delete().catch(O_o=>{}));
  if(bUser.roles.has(banRole.id)) return message.member.send(`User can't be banned!`);
  let bReason = args.join(" ").slice(22);
  if(!bReason) return message.member.send("Reason for ban is required.", message.delete().catch(O_o=>{}));

      let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#af0000")
    .setFooter(`Banned`)
    .setTimestamp()
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let banChannel = message.guild.channels.find(`name`, "punishment-logs");
    if(!banChannel) return message.member.send("Can't find punishment-logs channel. Please contact FlareCrazyy#7202 or FlyingFine#9603.");

    message.guild.member(bUser).ban(bReason);
      message.delete().catch(O_o=>{});
    banChannel.send(banEmbed);


  return;
  }
  else {
    message.member.send("You can't perform this action!");
      message.delete().catch(O_o=>{});
    return;
  }
}

exports.help = {
  name: "announce", description: "announces what you say.", usage: "^announce" , alias: ['ban']
  }
