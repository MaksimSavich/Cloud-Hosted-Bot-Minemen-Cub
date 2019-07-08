const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You are can't perform this action!");
  if(!args[0]) return message.channel.send("You are can't perform this action!");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then (msg => msg.delete(2000));
  })

}

module.exports.help = {
  name: "clear"
}
