const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client();

lient.commands = new Discord.Collection(); // Collection for all commands
client.aliases = new Discord.Collection(); // Collection for all aliases of every command
​
const modules = ['test']; // This will be the list of the names of all modules (folder) your bot owns
​
const fs = require('fs'); // Require fs to go throw all folder and files
​
modules.forEach(c => {
fs.readdir(`./command/${c}/`, (err, files) => { // Here we go through all folders (modules)
if (err) throw err; // If there is error, throw an error in the console
console.log(`[Commandlogs] Loaded ${files.length} commands of module ${c}`); // When commands of a module are successfully loaded, you can see it in the console
​
files.forEach(f => { // Now we go through all files of a folder (module)
const props = require(`./commands/${c}/${f}`); // Location of the current command file
client.commands.set(props.help.name, props); // Now we add the commmand in the client.commands Collection which we defined in previous code
props.conf.aliases.forEach(alias => { // It could be that the command has aliases, so we go through them too
client.aliases.set(alias, props.name); // If we find one, we add it to the client.aliases Collection
});
});
});
});









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






client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);
  client.user.setActivity('Minemen Den | ^help', { type: 'WATCHING' });
  console.log(client.commands);
});

    //Auto Welcome

  client.on('guildMemberAdd', member => {
    member.guild.channels.get('596898652744843274').send(`Welcome to the **Minemen Den | Official** Discord | ${member}`);
});

      //Prefix and return

client.on("message", async message => {
  if(message.author.client) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(!message.content.startsWith(prefix)) return;
  let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
  if(commandfile) commandfile.run(client, message, args);



      //Hello Command

if(cmd === `${prefix}hello`){
  return message.channel.send("Hello!");
  }
});



client.login(botconfig.token);