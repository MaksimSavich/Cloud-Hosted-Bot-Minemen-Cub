const send = requre(`quick.hook`)
const Discord = require("discord.js");

.exports.run = async (client, message, args, tools) => {

  let split = `%%`

  if (!args[0]) {

      const embed = new Discord.MessageEmbed()
        .setColor("#af7ac5")
        .setTitle(`Information`)
        .setDescription(`**Usage: \`\`\`!announce embedTitle ${split} embedMsg ${split} msgName ${split} msgIcon ${split} embedColor\`\`\`**`);

        return send(message.channel, embed, {
          name: `Announce Command`,
          icon: client.user.displayAvatarURL

        })
  }

  args =args.join(` `).split(split);

  for (var i =0; i<args.length; i++) args[i] = args[i].trim();

  if(args[4]) args[4] = parseInt(`0x${args[4]}`)

  let options = {
    title: args[0] || `Announcement`,
    message: args[1] || undefined,
    name: args [2] || `Minemen Den`,
    icon: args[3] || client.user.displayAvatarURL,
    embedColor: args[4] || 0xffffff
  }

  const embed = new Discord.MessageEmbed()
    .setColor(options.embedColor)
    .setTitle(options.title)

    if(options.message) embed.setDescription(options.message);

    send(message.channel, embed, {
      name: options.name,
      icon: options.icon
    })
}
