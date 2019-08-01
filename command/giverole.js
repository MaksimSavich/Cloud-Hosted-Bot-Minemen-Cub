const Discord = require("discord.js");

exports.run = async (client, message, args, tools) => {

  if(!message.member.hasPermission(`MEMBER_ROLES`)) return message.member.send("You can't perform that action!"), (message.delete().catch(O_o=>{}));

  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if(!rMember) return message.member.send("Can't find user!");
  let role = args.join(" ").slice(22);
      if(!role) return message.member.send(`Specify a role!`);
  let gRole = message.guild.roles.find(`name`, role);
      if(!gRole) return message.member.send(`Role doesn't exist.`);

        if(rMember.roles.has(gRole.id)) return message.member.send(`They already have that role.`), (message.delete().catch(O_o=>{}));
        await(rMember.addRole(gRole.id));

        try{
          await rMember.send(`You have been awarded the role ${gRole.name}!`)
        }catch(e){
          message.channel.send(`<@${rMember.id}> you have been awarded the role ${gRole}! We tried your DMs but they were locked.`)
    }
      return message.delete().catch(O_o=>{});
  }


  exports.help = {
    name: "announce", description: "announces what you say.", usage: "^announce" , alias: ['gr']
    }