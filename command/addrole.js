Const Discord = require("discord.js");

exports.run = async (client, message, args, tools) => {

  let roleRole = message.guild.roles.find("name", "• role •");
      if(!message.member.roles.has(roleRole.id)) return message.member.reply(`You can't perform this action!`);
      if(message.member.roles.has(roleRole.id)){
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if(!rMember) return message.member.send(1Can't find user!");
  let role = args.join(" ").slice(22);
      if(!role) return message.member.send(`Specify a role!`);
  let gRole = message.guild.roles.find(`name`, role);
      if(!gRole) return message.member.send(`role doesn't exist.`);

        if(rMember.roles.has(gRole.id));
        await(rMember.addRole(gRole.id));

        try{
          rMember.send(`You have been awarded the role ${gRole}!`)
        }catch(e){
          message.channel.sendrMember.send(`<@${rMember.id}> you have been awarded the role ${gRole}! We tried to DM you but they were locked.`)
    }
  }
}
