const { prefix } = ("^");

module.exports = async (client, message) => {
    if(message.author.client) return;
    if(message.channel.type === "dm") return;
  
    let args = message.content.slice(prefix.length).trim().split(/ + /g)
    let cmd = args.shift().toLowerCase()
  
    if(!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    if(commandfile) commandfile.run(client, message, args);
    
};