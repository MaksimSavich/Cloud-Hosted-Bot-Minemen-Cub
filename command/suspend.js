const Discord = require(`discord.js`);
const ms = require(`ms`);

module.exports = {

  config: {
      name: "suspend",
      description: "suspend a user",
      usage: "^suspend",
      accesability: "mod",
      aliases: ["tempmute"]
    },
  
    run: async (client, message, args) => {

  let suspendRole = message.guild.roles.find("name", "• staff •");
  if(!message.member.roles.has(suspendRole.id)) return message.member.send("You can't perform this action!" , message.delete().catch(O_o=>{})); 
  if(message.member.roles.has(suspendRole.id)){
      
      if (!args[0]) {

    const embed = new Discord.RichEmbed()
        .setColor("#af7ac5")
        .setTitle("How to use the suspend command.")
        .setDescription(`**Usage: \`\`\`^suspend "User" "Reason"\`\`\`**`);

        message.delete().catch(O_o=>{});   
        return message.member.send(embed)
}

let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args [0]));
if(!tomute) return message.member.send(`Can't find user!`) , message.delete().catch(O_o=>{});
if(tomute.roles.has(suspendRole.id)) return message.member.send(`You can't mute this person.`) , message.delete().catch(O_o=>{});
let muterole = message.guild.roles.find(`name`, "• suspended •");
if(!muterole){
  try{
    muterole = await message.guild.createRole({
      name: "• suspended •",
      color: "#000000",
      permissions:[]
    })
    message.guild.channels.forEach(async (channel, id) => {
      await channel.overwritePermissions(muterole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false,
        SEND_TTS_MESSAGES: false,
        ATTACH_FILES: false,
        MENTION_EVERYONE: false,
        READ_MESSAGE_HISTORY: true
      });
    });
  }catch(e){
    console.log(e.stack);
    }
  }

  let roles = message.guild.member(message.mentions.users.first()).roles.map(role => role.name).join(", ");
  let split = "-"
  let mutetime = args[1];
  

  if(!mutetime) return message.member.send(`You must specify a time!`) , message.delete().catch(O_o=>{});
  let mReason = args.join(" ").slice(22).split();

  if(!mReason) return message.member.send("Reason for mute is required.") , message.delete().catch(O_o=>{});

    let muteEmbed = new Discord.RichEmbed()
    .setFooter(`Muted`)
    .setColor("af0000")
    .setTimestamp()
    .addField("Muted User", `${tomute} with ID ${tomute.id}`)
    .addField("Length and Reason of Mute", `${mReason}`)
    .addField(`User Roles` , (roles))
    .addField("Muted By", `<@${message.author.id}> with ID ${message.author.id}`);

      let muteChannel = message.guild.channels.find(`name`, "punishment-logs");
        if(!muteChannel) return message.member.send("Can't find punishment-logs channel. Please contact FlareCrazyy#7202 or FlyingFine#9603.");
          muteChannel.send(muteEmbed);
  {
        await(tomute.removeRoles(tomute.roles));
        await(tomute.addRole(muterole.id));

      try{
        await tomute.send(`You have been muted for ${mutetime}!`)
      }catch(e){
        message.channel.send(`<@${tomute.id}> you have been muted for ${ms(ms(mutetime))}! We tried your DMs, but they were locked.`)
  }
  
  message.delete().catch(O_o=>{})
  let rolereturn = message.guild.roles.find(`name`, "• Minemen •");
  setTimeout(function(){
   tomute.removeRoles(tomute.roles)
   tomute.addRole(rolereturn.id)
    
    let rolesreturnEmbed = new Discord.RichEmbed()
    .setDescription(`~${tomute}~ needs their roles back`)
    .setColor("#af0000")
    .setFooter(`Unmuted`)
    .setTimestamp()
    .addField(`User Roles` , (roles));
    let rolereturnChannel = message.guild.channels.find(`name`, "people-who-need-roles");
    if(!rolereturnChannel) return message.member.send("Can't find people-who-need-roles channel. Please contact FlareCrazyy#7202 or FlyingFine#9603.");
  rolereturnChannel.send(rolesreturnEmbed);
  }, ms(mutetime));
  
      }
    }
  }
}
