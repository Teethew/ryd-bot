const dotenv = require("dotenv")
const loggedUser = require("./loggedUser")
const weatherInformation = require("./weatherInformation")
const Discord = require("discord.js")
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

client.on("messageCreate", (message) => { 
    loggedUser(message)
})

client.on("weatherInform", (city) => {
    weatherInformation()
})


client.login(TOKEN) //logging into the bot

