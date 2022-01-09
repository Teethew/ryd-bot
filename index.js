const dotenv = require("dotenv")
const Discord = require("discord.js") //importing discord.js from node_modules
//const Voice = require("@discordjs/voice")
const createEmbedResponse = require("./music")
const search = require("./youtube")

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

    if (message.content == "salve") {
        message.reply("Saaalveee quebrada!")
    }

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

