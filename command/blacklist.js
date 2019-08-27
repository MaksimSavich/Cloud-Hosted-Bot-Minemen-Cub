const Discord = require("discord.js");

module.exports = {

  config: {
      name: "blacklist",
      description: "blacklist",
      usage: "^blacklist",
      accesability: "admin",
      aliases: []
    },
  
    run: async (client, message, args) => {

  let staffRole = message.guild.roles.find("name", "• staff •");
  let banRole = message.guild.roles.find("name", "• blacklist •");
  if(message.member.roles.has(banRole.id)){

  
    if (!args[0]) {

      const embed = new Discord.RichEmbed()
          .setColor("#af7ac5")
          .setTitle("How to use the blacklist command.")
          .setDescription(`**Usage: \`\`\`^blacklist "User" "Reason"\`\`\`**`);

          message.delete().catch(O_o=>{});   
          return message.member.send(embed)
}
  
  
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.member.send("Can't find user!", message.delete().catch(O_o=>{}));
  if(bUser.roles.has(staffRole.id)) return message.member.send(`User can't be blacklisted!`, message.delete().catch(O_o=>{}));
  let bReason = args.join(" ").slice(22);
  if(!bReason) return message.member.send("Reason for blacklist is required.", message.delete().catch(O_o=>{}));
      let banEmbed = new Discord.RichEmbed()
    .setDescription("~Blacklist~")
    .setColor("#af0000")
    .setFooter(`Blacklisted`)
    .setTimestamp()
    .addField("Blacklisted User", `${bUser} with ID ${bUser.id}`)
    .addField("Blacklisted By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Blacklisted In", message.channel)
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
}