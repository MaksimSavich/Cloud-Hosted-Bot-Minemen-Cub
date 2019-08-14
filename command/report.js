const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  if (!args[0]) {

    const embed = new Discord.RichEmbed()
        .setColor("#af7ac5")
        .setTitle("How to use the report command.")
        .setDescription(`**Usage: \`\`\`^report "User" "Reason"\`\`\`**`);

        message.delete().catch(O_o=>{});   
        return message.member.send(embed)
}
  
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.member.send("Couldn't find user.",  message.delete().catch(O_o=>{}));
  let reason = args.join(" ").slice(22);
  if(!reason) return message.member.send(`Reason for report is required.`,  message.delete().catch(O_o=>{}));

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#af7ac5")
  .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
  .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);

  let reportschannel = message.guild.channels.find(`name`, "reports");
  if(!reportschannel) return message.channel.send("Couldn't find reports channel.");

  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);
}

module.exports.config = {
  name: "report",
  aliases: ["r"]
}