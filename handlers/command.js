const { readdirSync } = require("fs");

module.exports = (client) => {
    const load = dirs => {
        const command  = readdirSync(`.command/${dirs}/`).filter(d =>d.endsWith(`.js`))
        for  (let file of command) {
            const pull = require(`../command/${dirs}/${file}`)
        client.command.set(pull.config.name, pull)
        if(pull.config.aliases) pull.config.aliases.forEach(a => clientInformation.aliases.set(a, pull.config.name))
        }
    }
    ["member" , "admin" , "staff" , "moderator"].forEach(x => load(x))
}