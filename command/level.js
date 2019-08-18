const Discord = require("discord.js");
const botconfig = require("../botconfig");
var abbreviate = require("number-abbreviate")
let xp = require("../xp.json"); 

module.exports.run = async (client, message, args, tools) => {

  if(!(message.channel.id === `587465808200990730`) || (message.channel.id === `611070268810592296`)){
    const sembed = new Discord.RichEmbed()
    .setAuthor("Minemen Cub | Help", client.user.avatarURL)
    .setColor("#af7ac5")
    .setTitle("Please use commands in the **bot commands** channel!")
    .setThumbnail(client.user.aAvatarURL)
    .setFooter("#bot-commands");
  
    message.delete().catch(O_o=>{});
    message.member.send(sembed);
  } 
  if((message.channel.id === `587465808200990730`) || (message.channel.id === `611070268810592296`)) {
    
    if(!xp[message.author.id]){
        xp[message.author.id] = {
          xp: 0,
          level: 1
       };
     }
    
    let curlvl = xp[message.author.id].level;
    let curxp = xp[message.author.id].xp;
    let nxtLvlXp = curlvl * 1000;
    let difference = nxtLvlXp - curxp;
    const progress = (curxp % 1000) / 1000;
    const progressOutOf35 = Math.round(progress * 35);
    const x = "□";
    const barStr = `[${'■'.repeat(progressOutOf35)}${'□'.repeat(35 - progressOutOf35)}]`;

    const embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username} | Level ${curlvl}`)
    .setColor("#af7ac5")
    .setThumbnail(message.author.displayAvatarURL)
    .addField(`Xp` , `${abbreviate(curxp, 2)}/${abbreviate(nxtLvlXp , 2)}` , true)
    .addField("Progress Bar" , (barStr));

    
    message.channel.send({embed});
        }
    }

 