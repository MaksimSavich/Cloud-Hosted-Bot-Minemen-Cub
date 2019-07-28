const reqEvent = (event => require(`../events/${event}`)) 

module.exports = bot => {
    client.on("ready", function() {reqEvent("ready") (client)});
    client.on("reconnecting", () => reqEvent("reconnecting") (client))
    client.on("disconnect", () => reqEvent("disconnect") (client))
    client.on("warn", reqEvent("warn") (client))
    client.on("error", reqEvent("error") (client))
}