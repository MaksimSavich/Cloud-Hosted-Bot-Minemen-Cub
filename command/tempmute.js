const Discord = require(`discord.js`);
const ms = require(`ms`);

exports.run = async (client, message, args, tools) => {

let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args [0]));
if(!tomute) return message.member.send(`Can't find user!`, message.delete().catch(O_o=>{}));
if(tomute.hasPermission(`MANAGE_MESSAGES`)) return message.member.send(`You can't mute this person.`, message.delete().catch(O_o=>{}));
let muterole = message.guild.roles.find("name", "• muted •");
if(!muterole){
  try{
    muterole = await message.guild.createRole({
      name: "muted",
      color: "#000000",
      permissions:[]
    })
    message.guild.channels.forEach(async (channel, id) => {
      await channel.overwritePermissions(muterole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false,
        SEND_TTS_MESSAGES: false,
        ATTACH_FILES: false,
        MENTION_EVERYONE: false
      });
    });
  }catch(e){
    console.log(e.stack);
    }
  }

  let roles = message.guild.member(message.mentions.users.first()).roles.map(role => role.name).join(", ");
  let split = "-"
  let mutetime = args[1];
  if(!mutetime) return message.member.send(`You must specify a time!`, message.delete().catch(O_o=>{}));
  let mReason = args.join(" ").slice(22).split();
  if(!mReason) return message.member.send("Reason for mute is required.", message.delete().catch(O_o=>{}));

    let muteEmbed = new Discord.RichEmbed()
    .setDescription("~Mute~")
    .setColor("#af0000")
    .setFooter(`Muted`)
    .setTimestamp()
    .addField("Muted User", `${tomute} with ID ${tomute.id}`)
    .addField("Reason and Length of Mute", mReason , `${mutetime}`)
    .addField(`Length of Mute`, `${mutetime}`)
    .addField(`User Roles` , (roles))
    .addField("Muted By", `<@${message.author.id}> with ID ${message.author.id}`);

      let muteChannel = message.guild.channels.find(`name`, "punishment-logs");
        if(!muteChannel) return message.member.send("Can't find punishment-logs channel. Please contact FlareCrazyy#7202 or FlyingFine#9603.");

          message.delete().catch(O_o=>{});
          muteChannel.send(muteEmbed);

          (tomute.removeRoles(tomute.roles));
          (tomute.addRole(muterole.id));

      try{
        await tomute.send(`You have been muted for ${mutetime}!`)
      }catch(e){
        message.channel.send(`<@${tomute.id}> you have been muted for ${ms(ms(mutetime))}! We tried your DMs, but they were locked.`)
  }

  setTimeout(function(){
    
    tomute.removeRole(muterole.id);
      await(tomute.addRole(`name` , "• Minemen •"));
    message.member.send(`<@${tomute.id}> has been unmuted.`);
  }, ms(mutetime));
}


