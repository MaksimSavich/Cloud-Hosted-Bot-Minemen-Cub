const reqEvent = (event => require(`../events/${event}`)) 

module.exports = bot => {
    client.on("ready", function() {reqEvent("ready") (bot)});
    client.on("reconnecting", () => reqEvent("reconnecting") (bot))
    client.on("disconnect", () => reqEvent("disconnect") (bot))
    client.on("warn", reqEvent("warn") (bot))
    client.on("error", reqEvent("error") (bot))
}