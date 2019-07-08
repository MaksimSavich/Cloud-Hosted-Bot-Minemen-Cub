const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
    //Command Handler "start"
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split("."),pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
})
    //Command Handler "end"

jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(`${f} loaded!`);
  bot.commands.set(props.help.name, props);
})


bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity('Minemen Den | ^help', { type: 'WATCHING' });
})

    //Prefix and return

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

    //Report Command

  if(cmd === `${prefix}report`){

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    if(!rUser) return message.channel.send("Couldn't find user.");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#af7ac5")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  }

    //Kick Command

if(cmd === `${prefix}kick`){

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.member.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!kReason) return message.member.send("Reason for kick is needed.");

      let kickRole = message.guild.roles.find("name", "• kick •");
      if(message.member.roles.has(kickRole.id)){

        let kickEmbed = new Discord.RichEmbed()
      .setDescription("Kick")
      .setColor("#af0000")
      .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
      .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("Kicked In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", kReason);

      let kickChannel = message.guild.channels.find(`name`, "kick-ban-logs");
      if(!kickChannel) return message.member.send("Can't find kick-ban-logs channel. Please contact FlareCrazyy#7202 or FlyingFine#9603.");

      message.guild.member(kUser).kick(kReason);
        message.delete().catch(O_o=>{});
      kickChannel.send(kickEmbed);


    return;
    }
    else {
      message.member.send("You can't perform this action!");
        message.delete().catch(O_o=>{});
      return;
    }
  }

if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.member.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!bReason) return message.member.send("Reason for ban is needed.");

      let banRole = message.guild.roles.find("name", "• ban •");
      if(message.member.roles.has(banRole.id)){

        let kickEmbed = new Discord.RichEmbed()
      .setDescription("Kick")
      .setColor("#af0000")
      .addField("Banneded User", `${bUser} with ID ${bUser.id}`)
      .addField("Banneded By", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("Banned In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", kReason);

      let banChannel = message.guild.channels.find(`name`, "kick-ban-logs");
      if(!banChannel) return message.member.send("Can't find kick-ban-logs channel. Please contact FlareCrazyy#7202 or FlyingFine#9603.");

      message.guild.member(bUser).kick(bReason);
        message.delete().catch(O_o=>{});
      banChannel.send(banEmbed);


    return;
    }
    else {
      message.member.send("You can't perform this action!");
        message.delete().catch(O_o=>{});
      return;
    }
  }

      //Hello Command

if(cmd === `${prefix}hello`){
  return message.channel.send("Hello!");
}

    //ServerInfo Command

if(cmd === `${prefix}serverinfo`){

  let sicon = message.guild.displayiconUrl;
  let serverembed = new Discord.RichEmbed()
  .setTitle("__Server Information__")
  .setColor("#af7ac5")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Created On", message.guild.createdAt)
  .addField("Total Members", message.guild.memberCount);

  return message.channel.send(serverembed);
}

    //Help Command

if(cmd === `${prefix}help`){

  let bicon = bot.user.displayiconUrl;
  let botembed = new Discord.RichEmbed()
  .setTitle("__Bot Commands__")
  .setColor("#af7ac5")
  .setThumbnail(bicon)
  .addField("Command List", display = "^help | ^serverinfo | ^report");


  return message.channel.send(botembed);
}

if(cmd === `${prefix}staffhelp`){

  let staffRole = message.guild.roles.find("name", "• staff •");
  if(message.member.roles.has(staffRole.id)){

  let bicon = bot.user.displayiconUrl;
  let botembed = new Discord.RichEmbed()
  .setTitle("__Bot Commands__")
  .setColor("#af7ac5")
  .setThumbnail(bicon)
  .addField("Staff Command List", display = "^staffhelp | ^kick | ^ban");


  return message.member.send(botembed);
  }
}


});



bot.login(botconfig.token);
