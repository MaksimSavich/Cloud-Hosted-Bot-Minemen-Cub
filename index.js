const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client();


client.on(`message`, message => {

  let msg = message.content.toUpperCase();
  let sender = message.author;
  let args = message.content.slice(prefix.length).trim().split(` `);
  let cmd = args.shift().toLowerCase();

  if (!msg.startsWith(prefix)) return;
  if(message.author.client) return;

  try {

      let commandFile = require(`./command/${cmd}.js`);
      commandFile.run(client, message, args);

  } catch (e) {

      console.log(e.message);

  }finally {

      console.log(`${message.author.tag} ran the command ${cmd}`)

  }
})

client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);
  client.user.setActivity('Minemen Den | ^help', { type: 'WATCHING' });
})

    //Auto Welcome

    client.on('guildMemberAdd', member => {
    member.guild.channels.get('596898652744843274').send(`Welcome to the **Minemen Den | Official** Discord | ${member}`);
})


client.login(botconfig.token);
