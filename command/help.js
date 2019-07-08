const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
  message.channel.send(`<@${message.author.id}> you have been privately messaged the help commands.`);

  message.member.send({embed: {
    color: 6000,
    author: {
      name: "Minemen Cub | Help", 
      icon_url: bot.user.avatarURL,
    },
    title: "Commands",
    description: "^help | ^serverinfo | ^report",
    fields: [{
        name: "Report",
        value: "Example: ^report {User} {Reason}."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: `<@${message.author.id}>`
    }
  }
});

  message.delete().catch(O_o=>{});
}

module.exports.help = {
  name: "help"
}
