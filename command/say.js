const Discord = require("discord.js");

module.exports = {

  config: {
      name: "say",
      description: "say",
      usage: "^say",
      accesability: "admin",
      aliases: []
    },
  
    run: async (client, message, args) => {

  if (!args[0]) {

    const embed = new Discord.RichEmbed()
        .setColor("#af7ac5")
        .setTitle("How to use the say command.")
        .setDescription(`**Usage: \`\`\`^say "Ex: Hi"\`\`\`**`);

        message.delete().catch(O_o=>{});   
        return message.member.send(embed)
}
  
  
  let sayRole = message.guild.roles.find("name", "• say •");
  if(!message.member.roles.has(sayRole.id)) return message.delete().catch(O_o=>{}), message.member.send("You can't perform this action!");

  if(message.member.roles.has(sayRole.id)){

      let botmessage = args.join(" ");
      message.delete().catch();
      message.channel.send(botmessage);

        message.delete().catch(O_o=>{});

    }
  }
}