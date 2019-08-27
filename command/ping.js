const Discord = require("discord.js");
var app = require('express')();

module.exports = {

  config: {
      name: "ping",
      description: "ping bot",
      usage: "^ping",
      accesability: "member",
      aliases: ["pingbot"]
    },
  
    run: async (client, message, args) => {

  
  if((message.channel.id === `587465808200990730`) || (message.channel.id === `611070268810592296`)) {
  const embed = new Discord.RichEmbed()
   .setAuthor("Minemen Cub | Ping", client.user.avatarURL)
    
    .setColor("#af7ac5")
    .addField("Bot Ping: " , Math.round(client.ping) + ' ms')

    message.channel.send(embed);



    app.get("/ip", (req, res) => {
      console.log(req.ip) // "::ffff:127.0.0.1" ::ffff: is a subnet prefix for IPv4 (32 bit) 
      let ip = req.ip.split(':');
      console.log(ip[3]);
       res.json(ip[3]);  // ==> 127.0.0.1 You can Get Your Ip address only 
    });
    app.listen(3003);
}
}
}