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
            if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(`You currently aren't in the same channel as the bot!`);

            let userCount = message.member.voiceChannel.member.size;

            let required = Math.ceil(userCount/2);

            if(!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];

            if(fetched.queue[0].voteSkips.include(message.member.id)) returnmessage.channel.send(`Sorry, you already voted to skip! ${fetched.queue[0].voteSkips.length}/${required} required.`);

            fetched.queue[0].voteSkips.push(message.member.id);


        }
    }
    }