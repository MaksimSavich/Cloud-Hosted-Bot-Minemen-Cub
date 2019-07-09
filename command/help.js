const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  const embed = new Discord.RichEmbed()
    .setTitle("Member")
    .setAuthor("Minemen Cub | Help", bot.user.avatarURL)
    /*
     * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
     */
    .setColor("#af7ac5")
    .setDescription("``\n^help member\n``")

    /*
     * Takes a Date object, defaults to current date.
     */

    .addField("Staff",
      "``\n^help staff\n``")

    message.channel.send({embed});

  message.delete().catch(O_o=>{});
}

module.exports.help = {
  name: "help"
}
