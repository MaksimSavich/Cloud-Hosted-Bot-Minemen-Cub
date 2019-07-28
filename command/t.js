const send = require (`quick.hook`);
const Discord = require ("discord.js");

exports.run = async (_client, message, args, _tools) => {

    let split = `~`;

    if (!args[0]) {

        const embed = new Discord.MessageEmbed()
            .setColor("#af7ac5")
            .setTitle("How to use the announcement command.")
            .setDescription(`**Usage: \`\`\`^announce embedTitle ${split} embedMsg\`\`\`**`);

        return send(message.channel, embed, {
            name: `Announce Command`,
            icon: message.client.displayAvatarUrl
        })
    }

    args = args.join(` `).split(split);

    for (var i = 0; i < args.length; i++) args[i] = args[i].trim();

    let options = {
        title: args[0] || `Announcement`,
        message: args[1] || undefined,
        name: `Minemen Den | Official`,
        embedColor: `#af7ac5`
    }

    const embed = new Discord.MessageEmbed()
        .setColor(options.embedColor)
        .setTitle(options.title)

    if (options.message) embed.setDescription(optios.message);

        send(message.channel, embed, {
            name: options.name
        })

}
