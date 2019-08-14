const Discord = require("discord.js");

module.exports.run = async (client, message, args, tools) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.member.send("You can't perform this action!" , message.delete().catch(O_o=>{}));
  
  if (!args[0]) {

    const embed = new Discord.RichEmbed()
        .setColor("#af7ac5")
        .setTitle("How to use the clear command.")
        .setDescription(`**Usage: \`\`\`^clear "Amount Ex: 4"\`\`\`**`);

        message.delete().catch(O_o=>{});   
        return message.member.send(embed)
}

  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(1500));
  })

}
module.exports.config = {
  name: "clear",
  aliases: ["c"]
}