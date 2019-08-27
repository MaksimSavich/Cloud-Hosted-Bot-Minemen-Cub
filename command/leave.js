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
    
      run: async (client, message, args) => {

        let djRole = message.guild.roles.find("name", "• DJ •");
        if(!djRole) return message.member.send("You can't perform this action!" , message.delete().catch(O_o=>{})); 

                if(!message.member.voiceChannel) return message.channel.send(`Pleace connect to a voice channel.`);

                if(!message.guild.me.voiceChannel) return message.channel.send(`The bot isn't connected.`);

                if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send(`You aren't connected to the same channel as the bot!`);

                
                message.guild.me.voiceChannel.leave();
                message.channel.send(`Leaving Music Channel...`);
            } 
        }