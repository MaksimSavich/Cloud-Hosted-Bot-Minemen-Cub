const ytdl = require('ytdl-core');
const Discord = require(`discord.js`);



  module.exports = {

    config: {
        name: "play",
        description: "play song",
        usage: "^play",
        accesability: "member",
        aliases: []
      },
    
      run: async (client, message, args, active) => {

        if((message.channel.id === `587465808200990730`) || (message.channel.id === `611070268810592296`)){

            let fetched = active.get(message.guild.id);

            if(!fetched) return message.channel.send(`There currently isn't any music playing.`);

            let queue = fetched.queue;
            let nowPlaying = queue[0];
            let resp = `__**Now Playing**__\n**${nowPlaying.songTitle}** -- **Requested By:** *${nowPlaying.requester}*\n\n__**Queue**__\n`;

            if(!message.guild.me.voiceChannel) return message.channel.send(`The bot isn't connected.`);

            for(var i = 1; i < queue.length; i++) {
                resp += `${i}. **${queue[i].songTitle}** -- **Requested By:** *${queue[i].requester}*\n`;
            }

            message.channel.send(resp);

        }}
        
    } 