const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  const embed = new Discord.RichEmbed()
    .setTitle("This is your title, it can hold 256 characters")
    .setAuthor("Minemen Cub | Help", bot.user.avatarURL)
    /*
     * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
     */
    .setColor("#af7ac5")
    .setDescription("This is the main body of text, it can hold 2048 characters.")
    .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
    .setImage("http://i.imgur.com/yVpymuV.png")
    .setThumbnail("http://i.imgur.com/p2qNFag.png")
    /*
     * Takes a Date object, defaults to current date.
     */
    .setTimestamp()
    .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
    .addField("This is a field title, it can hold 256 characters",
      "This is a field value, it can hold 1024 characters.")
    /*
     * Inline fields may not display as inline if the thumbnail and/or image is too big.
     */
    .addField("Inline Field", "They can also be inline.", true)
    /*
     * Blank field, useful to create some space.
     */
    .addBlankField(true)
    .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

    message.channel.send({embed});

}

  message.delete().catch(O_o=>{});
}

module.exports.help = {
  name: "help"
}
