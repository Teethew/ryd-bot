const dotenv = require("dotenv")
const Discord = require("discord.js") //importing discord.js from node_modules
const createEmbedResponse = require("./music")
const search = require("./youtube")
const loggedUser = require("./loggedUser")
const weatherInformation = require("./weatherInformation")

dotenv.config()

const TOKEN = process.env.TOKEN
const prefix = "?"

const client = new Discord.Client({
    intents: [ //telling discord what kind of things he should look for
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => { //once a ready event happens, the bot will automatically run this function
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", async (message) => { //whenever the bot sees someone, it will send a message
    let musicCommand = prefix + "p "

    loggedUser(message)

    if (message?.content.startsWith(musicCommand)) {
        const song = message.content.replace(musicCommand, "")

        await search(song)
                .then(youtubeResponse => {
                    const embeds = createEmbedResponse(youtubeResponse, message)
                    const title = embeds[0].title //
                    message.reply(`Reproduzindo **${title}**`)
                    message.channel.send({ embeds: embeds })
                })
    }

})

client.login(TOKEN) //logging into the bot

