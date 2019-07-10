const send = require(`quick.hook`);
const Discord = require("discord.js");

exports.run = async.catch(client, message, args, tools) => {

  let split = `&`

  if (!args[0]) {

      const embed = new Discord.MessageEmbed()
        .setColor("#af7ac5")
        .setTitle(`Information`)
        .setDescription(`**Usage: \`\`\`!ta embedTitle ${split} embedMsg ${split} msgName ${split} msgIcon ${split} embedColor\`\`\`**`);

        return send(message.channel, embed, {
          name: `Announce Command`,
          icon: client.user.displayAvatarURL

        })
  }

  args = args.join(` `).split(split);

  for (var i =0; i<args.length; i++) args[i] = args[i].trim();

  if(args[4]) args[4] = parseInt(`0x${args[4]}`)

  let options = {
    title: args[0] || `Announcement`,
    message: args[1] || undefined,
    name: args [2] || `Minemen Den`,
    icon: args[3] || client.user.displayAvatarURL,
    embedColor: args[4] || "#af7ac5"
  }

  const embed = new Discord.MessageEmbed()
    .setColor(options.embedColor)
    .setTitle(options.title)

    if (options.message) embed.setDescription(options.message);

    send(message.channel, embed, {
      title: options.title,
      message: options.message
    })

    message.delete().catch(O_o=>{});
}
