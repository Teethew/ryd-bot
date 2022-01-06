const dotenv = require('dotenv')
const Discord = require("discord.js") //importing discord.js from node_modules
dotenv.config()

const TOKEN = process.env.TOKEN

const client = new Discord.Client({ 
    intents: [ //telling discord what kind of things he should look for
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => { //once a ready event happens, the bot will automatically run this function
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => { //whenever the bot sees someone, it will send a message
    if (message.content == "salve"){
        message.reply("Saaalveee quebrada!")
    }
})


client.login(TOKEN) //logging into the bot

