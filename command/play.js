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

        let djRole = message.guild.roles.find("name", "• DJ •");
        if(!djRole) return message.member.send("You can't perform this action!" , message.delete().catch(O_o=>{})); 

        if((message.channel.id === `587465808200990730`) || (message.channel.id === `611070268810592296`)){

           if(message.member.voiceChannelID !== `597621947005796373`) return message.channel.send(`Please join the music channel.`);

            if(!message.member.voiceChannel) return message.channel.send(`Please connect to a voice channel`);
            

                    if(!args[0]) return message.channel.send(`Please input a url`);

            let validate = await ytdl.validateURL(args[0]);

                if(!validate) return message.channel.send(`Please input a **valid** url`);

                let info = await ytdl.getInfo(args[0]);

                let data = active.get(message.guild.id) || {};

                if(!data.connection) data.connection = await message.member.voiceChannel.join();
                if(!data.queue) data.queue = [];
                data.guildID = message.guild.id;

                data.queue.push({
                    songTitle: info.title,
                    requester: message.author.tag,
                    url: args[0],
                    announceChannel: message.channel.id
                });

                if(!data.dispatcher) play(client, data);
                else{

                    message.channel.send(`**Added To Queue:** ${info.title} | **Requested By:** ${message.author.tag}`);

                }
                active.set(message.guild.id, data);
            

            } 
            async function play(client, data) {
                client.channels.get(data.queue[0].announceChannel).send(`**Now Playing:** ${data.queue[0].songTitle} | **Requested By:** ${data.queue[0].requester}`);

                data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: 'audioonly' }));
                data.dispatcher.guildID = data.guildID;

                data.dispatcher.once('finish', function() {

                    finish(client, this);

                });

            }
            function finish() {
                finish(client, this);

            }

            function finish(client, dispatcher) {

                let fetched = active.get(dispatcher.guildID);
                
                fetched.queue.shift();

                if(fetched.queue.length > 0) {

                    active.set(dispatcher.guildID, fetched);

                    play(client,fetched);

                } else {
                    active.delete(dispatcher.guildID);

                    let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;
                    if(vc) vc.leave();
                }

            }
        
        }
        
    }