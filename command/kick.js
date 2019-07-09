const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.member.send("Can't find user!");
  let kReason = args.join(" ").slice(22);
  if(!kReason) return message.member.send("Reason for kick is needed.");

    let kickRole = message.guild.roles.find("name", "• kick •");
    if(message.member.roles.has(kickRole.id)){

      let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#af0000")
    .setTimestamp()
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "kick-ban-logs");
    if(!kickChannel) return message.member.send("Can't find kick-ban-logs channel. Please contact FlareCrazyy#7202 or FlyingFine#9603.");

    message.guild.member(kUser).kick(kReason);
      message.delete().catch(O_o=>{});
    kickChannel.send(kickEmbed);


  return;
  }
  else {
    message.member.send("You can't perform this action!");
      message.delete().catch(O_o=>{});
    return;
  }
}

module.exports.help = {
  name: "kick"
}
