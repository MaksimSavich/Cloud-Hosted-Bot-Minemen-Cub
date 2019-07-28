const { botconfig } = require("./botconfig.json");
const { Client, Collection } = require("discord.js");
const client = new Discord.Client();
const prefix = `^`;

    //Auto Welcome

    client.on('guildMemberAdd', member => {
    member.guild.channels.get('596898652744843274').send(`Welcome to the **Minemen Den | Official** Discord | ${member}`);
});

["command", "aliases"].forEach(x => client[x] = new Collection())
["console" , "command" , "event"].forEach(x => require(`./handlers/${x}`)(client))


// client.on(`message`, message => {

//   let msg = message.content.toUpperCase();
//   let sender = message.author;
//   let args = message.content.slice(prefix.length).trim().split(` `);
//   let cmd = args.shift().toLowerCase();

//   if (!msg.startsWith(prefix)) return;
//   if(message.author.bot) return;

//   try {

//       let commandFile = require(`./command/${cmd}.js`);
//       commandFile.run(client, message, args);

//   } catch (e) {

//       console.log(e.message);

//   }finally {

//       console.log(`${message.author.tag} ran the command ${cmd}`)

//   }
// })
  

client.on(`raw` , event => {
  console.log(event);
  const eventName = event.t;
    if(eventName === `MESSAGE_REACTION_ADD`)
    {
      if(event.d.message_id === `603383852223823872`)
      {
          var reactionChannel = client.channels.get(event.d.channel_id);
          if (reactionChannel.messages.has(event.d.message_id))
            return;
          
            else {
              reactionChannel.fetchMessage(event.d.message_id)
                .then(msg => {
                    var msgReaction = msg.reactions.get(event.d.emoji.name + ":" + event.d.emoji.id);
                    var user = client.users.get(event.d.user_id);
                    client.emit(`messageReactionAdd`, msgReaction, user);
                })
              .catch(err => console.log(err));
          }
        }
      }
        else if(eventName === `MESSAGE_REACTION_REMOVE`)    
      {
        if(event.d.message_id === `603383852223823872`)
      {
          var reactionChannel = client.channels.get(event.d.channel_id);
          if (reactionChannel.messages.has(event.d.message_id))
            return;
          
            else {
              reactionChannel.fetchMessage(event.d.message_id)
                .then(msg => {
                    var msgReaction = msg.reactions.get(event.d.emoji.name + ":" + event.d.emoji.id);
                    var user = client.users.get(event.d.user_id);
                    client.emit(`messageReactionRemove`, msgReaction, user);
                })
              .catch(err => console.log(err));
          }
        }
      }
    
});

client.on(`messageReactionAdd` , (messageReaction , user) => {
  
    var rolename = messageReaction.emoji.name;
    var role = messageReaction.message.guild.roles.find(role => role.name.toLowerCase() === rolename.toLowerCase());

    if(role)
    {
      var member = messageReaction.message.guild.members.find(member => member.id === user.id);
      if(member)
    {
      member.addRole(role.id);
    }
  }
}); 

client.on('messageReactionRemove', (messageReaction, user) =>{
  var rolename = messageReaction.emoji.name;
  var role = messageReaction.message.guild.roles.find(role => role.name.toLowerCase() === rolename.toLowerCase());

  if(role)
  {
    var member = messageReaction.message.guild.members.find(member => member.id === user.id);
    if(member)
  {
    member.removeRole(role.id);
  }
}
});

      //Prefix and return

// client.on("message", async message => {
//   if(message.author.client) return;
//   if(message.channel.type === "dm") return;

//   let prefix = botconfig.prefix;
//   let messageArray = message.content.split(" ");
//   let cmd = messageArray[0];
//   let args = messageArray.slice(1);

//   if(!message.content.startsWith(prefix)) return;
//   let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
//   if(commandfile) commandfile.run(client, message, args);





client.login(botconfig.token);