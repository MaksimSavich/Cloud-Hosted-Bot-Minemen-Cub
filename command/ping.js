module.exports.run = (client, message, args, tools) => {

  msg.channel.send({embed: {
    color: 0x2ed32e,
    fields: [{
        name: "Pong",
        value: "My Ping: " + Math.round(client.ping) + ' ms'
  }
 ]


    }
  })
}
module.exports.config = {
  name: "ping",
  aliases: ["p"]
}