
    const {readdirSync} = require("fs");
   
    
//     let msg = message.content.toUpperCase();
//   let sender = message.author;
//   let args = message.content.slice(prefix.length).trim().split(` `);
//   let cmd = args.shift().toLowerCase();

    module.exports = (client, message, args) => {


        const load = dirs => {
            const commands = readdirSync (`./command/${dirs}`).filter(d => d.endsWith(`.js`));
            for(let file of commands) {
                const pull = require(`../command/${dirs}/${file}`);
                client.commands.set(pull.config.name, pull);
                if(pull.config.aliases) pull.config.aliases.forEach(a => client.aliases.set(a, pull.config.name));
                
            }
        
        }
        ["member", "mod", "admin"].forEach(x => {load(x); 
            console.log("It loaded!");
        })
    
        
    };

// client.on(`message`, message => {

//   let msg = message.content.toUpperCase();
//   let sender = message.author;
//   let args = message.content.slice(prefix.length).trim().split(` `);
//   let cmd = args.shift().toLowerCase();

//   if (!msg.startsWith(prefix)) return;
//   if(message.author.bot) return;

//   try {

//       let commandFile = require(`./command/${cmd}.js`);
//       commandFile.run(client, message, args);