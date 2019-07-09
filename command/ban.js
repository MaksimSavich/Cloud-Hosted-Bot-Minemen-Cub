const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.member.send("Can't find user!");
  let bReason = args.join(" ").slice(22);
  if(!bReason) return message.member.send("Reason for ban is needed.");

    let banRole = message.guild.roles.find("name", "• ban •");
    if(message.member.roles.has(banRole.id)){

      let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#af0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let banChannel = message.guild.channels.find(`name`, "kick-ban-logs");
    if(!banChannel) return message.member.send("Can't find kick-ban-logs channel. Please contact FlareCrazyy#7202 or FlyingFine#9603.");

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

module.exports.help = {
  name: "ban"
}
