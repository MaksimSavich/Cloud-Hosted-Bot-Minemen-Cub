const { readdirSync } = require("fs");

module.exports = (bot) => {
    const load = dirs => {
        const command  = readdirSync(`.command${dirs}/`).filter(d =>d.endsWith(`.js`))
        for  (let file of command) {
            const pull = require(`../command/${dirs}/${file}`)
        bot.command.set(pull.config.name, pull)
        if(pull.config.aliases) pull.config.aliases.forEach(a => clientInformation.aliases.set(a, pull.config.name))
        }
    }
    ["miscellaneous" , "admin" , "staff" , "moderator"].forEach(x => load(x))
}