const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    let staffRole = message.guild.roles.find("name", "• staff •");
    let banRole = message.guild.roles.find("name", "• ban •");
    let bannedRole = message.guild.roles.find("name", "• banned •");
    if(message.member.roles.has(banRole.id)){
  
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.member.send("Can't find user!", message.delete().catch(O_o=>{}));
    if(bUser.roles.has(staffRole.id)) return message.member.send(`User can't be banned`, message.delete().catch(O_o=>{}));
    let bReason = args.join(" ").slice(22);
    if(!bReason) return message.member.send("Reason for ban is required.", message.delete().catch(O_o=>{}));
    let roles = message.guild.member(message.mentions.users.first()).roles.map(role => role.name).join(", ");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Blacklist~")
    .setColor("#af0000")
    .setFooter(`Banned`)
    .setTimestamp()
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Reason", bReason);

    let banChannel = message.guild.channels.find(`name`, "punishment-logs");
    if(!banChannel) return message.member.send("Can't find punishment-logs channel. Please contact FlareCrazyy#7202 or FlyingFine#9603.");

    fs.writeFile("./roles.json" , JSON.stringify(roles) , (err) => {
        if(err) console.log(err)
    })

    await(bUser.removeRoles(bUser.roles));
    await(bUser.addRole(bannedRole.id));


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
