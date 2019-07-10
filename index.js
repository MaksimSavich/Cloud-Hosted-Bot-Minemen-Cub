const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = `^`;
bot.on(`message`, message => {

  let msg = message.content.toUpperCase();
  let sender = message.author;
  let args = message.content.slice(prefix.length).trim().split(` `);
  let cmd = args.shift().toLowerCase();

  if (!msg.startsWith(prefix)) return;
  if(message.author.bot) return;

  try {

      let commandFile = require(`./command/${cmd}.js`);
      commandFile.run(bot, message, args);

  } catch (e) {

      console.log(e.message);

  }finally {

      console.log(`${message.author.tag} ran the command ${cmd}`)

  }
})

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity('Minemen Den | ^help', { type: 'WATCHING' });
})

    //Auto Welcome

    bot.on('guildMemberAdd', member => {
    member.guild.channels.get('596898652744843274').send(`Welcome to the **Minemen Den | Official** Discord | ${member}`);
});

      //Prefix and return

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot, message, args);

      //Hello Command

if(cmd === `${prefix}hello`){
  return message.channel.send("Hello!");
}


});



client.login(botconfig.token);
