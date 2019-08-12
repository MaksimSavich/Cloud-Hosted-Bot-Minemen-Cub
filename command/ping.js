const Discord = require("discord.js");
module.exports.run = (client, message, args, tools) => {


  const embed = new Discord.RichEmbed()
    .setTitle("Member")
    .setAuthor("Minemen Cub | Ping", client.user.avatarURL)
    
    .setColor("#af7ac5")
    .addField("Bot Ping: " , Math.round(client.ping) + ' ms')

    message.channel.send(embed);

}

module.exports.config = {
  name: "ping",
  aliases: ["p"]
}