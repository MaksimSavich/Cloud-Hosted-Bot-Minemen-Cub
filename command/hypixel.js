
Discord = require("discord.js");
const HypixelAPI = require('hypixel-api')



module.exports = {

    config: {
        name: "hypixel",
        description: "hypix name",
        usage: "^hypixel",
        accesability: "member",
        aliases: []
      },
    
      run: async (client, message, args) => {

    const hypix = new HypixelAPI('c1e3bbaf-c67c-4166-b146-4267b8dd2f33')

    let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    hypix.getPlayer('name', `${User}`).then((player) => {
    console.log(player)

    const embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username} | Hypixel Stats`)
    .setColor("#af7ac5")
    .setDescription(skywars_wins_solo);
    
    
    
    message.channel.send({embed});

}).catch((err) => {
    console.error('Error! ' + err)
})

      }}