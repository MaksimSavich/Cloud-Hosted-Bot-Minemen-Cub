const Discord = require("discord.js");
const {token} = require("./botconfig.json");

const client = new Discord.Client();
const prefix = ("^");
const fs = require("fs");
let xp = require(`./xp.json`);

const active = new Map();



client.on(`message`, message => {

  let msg = message.content.toUpperCase();
  let sender = message.author;
  let args = message.content.slice(prefix.length).trim().split(` `);
  let cmd = args.shift().toLowerCase();

  if (!msg.startsWith(prefix)) return;
  if(message.author.bot) return;

  try {

      let commandFile = require(`./command/${cmd}.js`);
      commandFile.run(client, message, args, active);

  } catch (e) {

      console.log(e.message);

  }finally {

      console.log(`${message.author.tag} ran the command ${cmd}`)

  }
  
})

// client.on(`message`, message => {
//   const args = message.content.slice(prefix.length).split(/ +/);

// 	const commandName = args.shift().toLowerCase();

// 	if (!client.commands.has(commandName)) return;

// 	const command = client.commands.get(commandName);

// 	try {

// 		command.execute(message, args);
//   }
//   catch (e) {

//           console.log(e.message);
    
//       }
//   finally{
//     console.log(`${message.author.tag} ran the command ${cmd}`)

//   }

// });

    



client.on(`message`, message => {
  if(message.author.bot) return;
  const guildMember = message.member;
  

let xpAdd = Math.floor(Math.random() * 6) + 6;
console.log(xpAdd);

if(!xp[message.author.id]){
  xp[message.author.id] = {
    xp: 0,
    level: 1
  };
}


let curxp = xp[message.author.id].xp;
let curlvl = xp[message.author.id].level;
let nxtLvl = xp[message.author.id].level * 1000;
xp[message.author.id].xp =  curxp + xpAdd;
if(nxtLvl <= xp[message.author.id].xp){
  xp[message.author.id].level = curlvl + 1;
  let lvlup = new Discord.RichEmbed()
  .setTitle("Level Up!")
  .setColor("#af7ac5")
  .addField("New Level", curlvl + 1);

  message.channel.send(lvlup).then(msg => {msg.delete(5000)});
}
fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
  if(err) console.log(err)
});

let fiveRole = message.guild.roles.find(`name`, "• {Level 5+} Minemen •");
let tenRole = message.guild.roles.find(`name`, "• {Level 10+} Minemen •");
let fivetenRole = message.guild.roles.find(`name`, "• {Level 15+} Minemen •");
let twentyRole = message.guild.roles.find(`name`, "• {Level 20+} Minemen •");
let twofiveRole = message.guild.roles.find(`name`, "• {Level 25+} Minemen •");
let thirtyRole = message.guild.roles.find(`name`, "• {Level 30+} Minemen •");
let mineRole = message.guild.roles.find(`name` , "• Minemen •");


if(xp[message.author.id].level > 4) return guildMember.removeRole(mineRole.id) , guildMember.addRole(fiveRole.id);
if(xp[message.author.id].level > 9) return guildMember.removeRole(fiveRole.id) , guildMember.addRole(tenRole.id);
if(xp[message.author.id].level > 14) return guildMember.removeRole(tenRole.id) , guildMember.addRole(fiveten.id);
if(xp[message.author.id].level > 19) return guildMember.removeRole(fivetenRole.id) , guildMember.addRole(twentyRole.id);
if(xp[message.author.id].level > 24) return guildMember.removeRole(twentyRole.id) , guildMember.addRole(twofiveRole.id);
if(xp[message.author.id].level > 29) return guildMember.removeRole(twofiveRole.id) , guildMember.addRole(thirtyRole.id);


});



  
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

    

client.login(token);