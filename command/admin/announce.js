const send = require (`quick.hook`);
const Discord = require ("discord.js");
const fetch = require("node-fetch");

module.exports = {
  config: {
    name: "announce",
    description: "Used to announce messages",
    usage: "^announce",
    accessability: "admin",
    aliases: ["a"]

  },

  run: async (client, message, args, tools) => {

    let sayRole = message.guild.roles.find("name", "• say •");
    if(message.member.roles.has(sayRole.id)){
        
        let split = `~`;

        if (!args[0]) {

            const embed = new Discord.RichEmbed()
                .setColor("#af7ac5")
                .setTitle("How to use the announcement command.")
                .setDescription(`**Usage: \`\`\`^announce Title ${split} Message\`\`\`**`);

                    return message.member.send(embed)
    }

    args = args.join(` `).split(split);

        for (var i = 0; i < args.length; i++) args[i] = args[i].trim();

             let options = {
                title: args[0] || `Announcement`,
                message: args[1] || undefined,
                name: `Minemen Den | Official`,
                 embedColor: `#af7ac5`
    }

    const embed = new Discord.RichEmbed()
        .setColor(options.embedColor)
        .setTimestamp()
        .setFooter((`${message.author.tag}`) , (message.author.displayAvatarURL))
        .setTitle(options.title)

    if (options.message) embed.setDescription(options.message);

    message.delete().catch(O_o=>{});

        return message.channel.send(embed)

        
    }
  }
}

