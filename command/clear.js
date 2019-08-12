const Discord = require("discord.js");

module.exports.run = async (client, message, args, tools) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't perform this action!");
  if(!args[0]) return message.channel.send("You must specify a number!");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(1500));
  })

}
module.exports.config = {
  name: "clear",
  aliases: ["c"]
}