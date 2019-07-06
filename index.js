const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity('Minemen Den | ^help', { type: 'WATCHING' });
})

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);



if(cmd === `${prefix}hello`){
  return message.channel.send("▬▬▬▬▬▬▬▬▬▬▬◥◣◆◢◤▬▬▬▬▬▬▬▬▬▬▬
:police_car: Staff Roles :police_car:
In order to become staff on here, you must be at least level 5 and apply.

If you are staff on a server like Lunar, MMC, etc message @Owner » FlareCrazyy   or @Owner » FlyingFine in order to receive a special role.
▬▬▬▬▬▬▬▬▬▬▬◥◣◆◢◤▬▬▬▬▬▬▬▬▬▬▬
:clapper: Media Roles :clapper:
YouTube - 500 Subscribers
Famous - 1K Subscribers

:exclamation: Requirements may change over time :exclamation:

If you would like to receive your roles message @Owner » FlareCrazyy or @Owner » FlyingFine
▬▬▬▬▬▬▬▬▬▬▬◥◣◆◢◤▬▬▬▬▬▬▬▬▬▬▬");
}

if(cmd === `${prefix}serverinfo`){

  let sicon = message.guild.displayAvatarUrl;
  let serverembed = new Discord.RichEmbed()
  .setTitle("__Server Information__")
  .setColor("#af7ac5")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Created On", message.guild.createdAt)
  .addField("Total Members", message.guild.memberCount);

  return message.channel.send(serverembed);
}

if(cmd === `${prefix}help`){

  let bicon = bot.user.displayAvatarUrl;
  let botembed = new Discord.RichEmbed()
  .setTitle("__Bot Commands__")
  .setColor("#af7ac5")
  .setThumbnail(bicon)
  .addField("Command List", display = "^help | ^serverinfo");


  return message.channel.send(botembed);
}



});



bot.login(botconfig.token);
