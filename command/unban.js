const Discord = require("discord.js");
const thererolese = require("../../roles.json");

module.exports = {

    config: {
        name: "unban",
        description: "unban a user",
        usage: "^unban",
        accesability: "mod",
        aliases: ["uban"]
      },
    
      run: async (client, message, args) => {

    let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let unbUser = thererolese[message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))];
if (!unbUser) return message.member.send("Can't find user!" , message.delete().catch(O_o=>{}));
let unbuserRoles = thererolese[unbUser].roles;
let bannedRole = message.guild.roles.find("name", (unbuserRoles));
person.removeRoles(person.roles);
person.addRoles(bannedRole.id);

message.delete().catch(O_o=>{});
 }
}