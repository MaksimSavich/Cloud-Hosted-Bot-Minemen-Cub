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

            let djRole = message.guild.roles.find("name", "• DJ •");
        if(!djRole) return message.member.send("You can't perform this action!" , message.delete().catch(O_o=>{})); 

            let fetched = active.get(message.guild.id);

            if(!fetched) return message.channel.send("There cirremt;y osm't any music playing in this guild!");

            if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.member.send(`You currently aren't in the same channel as the bot.`);

            if(isNaN(args[0]) || args[0] > 200 || args[0] <0) return message.channel.send(`Please input a number 0-200`);

            fetched.dispatcher.setVolume(args[0]/100);

            message.channel.send(`Successfully set the volume of ${fetched.queue[0].songTitle} to ${args[0]}`);


        }
      }
    }