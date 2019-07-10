const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = `^`;
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
});


      //Hello Command

if(cmd === `${prefix}hello`){
  return message.channel.send("Hello!");
}


if (cmd === `${prefix}ta`){

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

    return;
}





client.login(botconfig.token);
