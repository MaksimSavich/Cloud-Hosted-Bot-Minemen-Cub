const { readdirSync } = require("fs");

module.exports = (client) => {
    const load = dirs => {
        const commands  = readdirSync(`./command/${dirs}/`).filter(d => d.endsWith(`.js`))
        for  (let file of commands) {
            client.commands = new Collection();
            const pull = require(`../command/${dirs}/${file}`)
        client.commands.set(pull.config.name, pull)
        if(pull.config.aliases) pull.config.aliases.forEach(a => client.aliases.set(a, pull.config.name))
        }
    }
    ["member" , "admin" , "staff" , "moderator"].forEach(x => load(x))
}