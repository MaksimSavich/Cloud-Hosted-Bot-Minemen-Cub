module.exports.run = (client, message, args, tools) => {

  message.channel.send(`Pong!`)


};
module.exports.config = {
  name: "ping",
  aliases: ["p"]
}