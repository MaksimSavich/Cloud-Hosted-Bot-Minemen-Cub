module.exports = (bot) => {

let prompt = process.openStdin()
    prompt.addListener("data" , res => {
        
        let x = res.toString().trim().split(/ +/g)
        client.channels.get("597558113499086849").send(x.join(" "));

    })

}