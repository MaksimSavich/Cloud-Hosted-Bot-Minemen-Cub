const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    message.guild.member(bUser).unban();
}