exports.run = (client, message, args, tools) => {

  message.channel.send(`Pong!`)


}

exports.help = {
  name: "announce", description: "announces what you say.", usage: "^announce" , alias: ['p']
  }