exports.run = (client, message, args, tools) => {

  message.channel.send(`Pong!`)


}
exports.conf = {
  alias: ['p']
  };
exports.help = {
  name: "announce", description: "announces what you say.", usage: "^announce"
  }