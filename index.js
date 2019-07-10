const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection();

fs.readdir("./command/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./command/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

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

if (cmd === `${prefix}ta`) {

  let split = `&`

  if (!args[0]) {

      const embed = new Discord.RichEmbed()
        .setColor("#af7ac5")
        .setTitle(`Information`)
        .setDescription(`**Usage: \`\`\`!ta embedTitle ${split} embedMsg ${split} msgName ${split} msgIcon ${split} embedColor\`\`\`**`);

        return send(message.channel, embed, {
          name: `Announce Command`,
          icon: message.author.displayAvatarURL
        })
  }

  args = args.join(` `).split(split);

  for (var i =0; i<args.length; i++) args[i] = args[i].trim();

  if(args[4]) args[4] = parseInt(`0x${args[4]}`)

  let options = {
    title: args[0] || `Announcement`,
    message: args[1] || undefined,
    name: args [2] || `Minemen Den`,
    icon: args[3] || client.user.displayAvatarURL,
    embedColor: args[4] || "#af7ac5"
  }

  const embed = new Discord.MessageEmbed()
    .setColor(options.embedColor)
    .setTitle(options.title)

    if (options.message) embed.setDescription(options.message);

    send(message.channel, embed, {
      title: options.title,
      message: options.message
    })

    message.delete().catch(O_o=>{});
}


bot.login(botconfig.token);
