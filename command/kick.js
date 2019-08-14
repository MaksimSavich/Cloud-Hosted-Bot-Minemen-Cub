const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  let kickRole = message.guild.roles.find("name", "• kick •");
  let staffRole = message.guild.roles.find("name", "• staff •");
    if(message.member.roles.has(kickRole.id)){

      if (!args[0]) {

        const embed = new Discord.RichEmbed()
            .setColor("#af7ac5")
            .setTitle("How to use the kick command.")
            .setDescription(`**Usage: \`\`\`^kick "User" "Reason"\`\`\`**`);
    
            message.delete().catch(O_o=>{});   
            return message.member.send(embed)
    }
      
      
      
      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(kUser.roles.has(staffRole.id)) return message.member.send(`User can't be banned.`, message.delete().catch(O_o=>{}));
      if(!kUser) return message.member.send("Can't find user!", message.delete().catch(O_o=>{}));
      let kReason = args.join(" ").slice(22);
      if(!kReason) return message.member.send("Reason for kick is required.", message.delete().catch(O_o=>{}));

      let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#af0000")
    .setFooter(`Kicked`)
    .setTimestamp()
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "punishment-logs");
    if(!kickChannel) return message.member.send("Can't find punishment-logs channel. Please contact FlareCrazyy#7202 or FlyingFine#9603.");

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

module.exports.config = {
  name: "kick",
  aliases: ["k"]
}
