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

        

        let fetched = active.get(message.guild.id);

            if(!fetched) return message.channel.send(`There currently isn't any music playing.`);

            const serverQueue = fetched.queue
            let data = active.get(message.guild.id) || {};
            let info = await ytdl.getInfo(args[0]);

            data.queue.push({
                songTitle: info.title,
                requester: message.author.tag,
                announceChannel: message.channel.id
            });


  if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
  if(!serverQueue) return message.channel.send('Not playing anything right now');
  if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send(`You must be in **${serverQueue.voiceChannel.name}** to loop the queue`);
  serverQueue.loop = !serverQueue.loop;
  active.set(message.guild.id, serverQueue);

  function finish(client, dispatcher) {
  
  if (serverQueue.loop === true) fetched.queue.push(fetched.queue.shift());
  else serverQueue.songTitle.shift();
    play(client, fetched);
  return message.channel.send('**🔁 Unrepeated current queue!**');
  }
        

        }
    }

    