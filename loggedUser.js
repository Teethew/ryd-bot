function loggedUser(message) { //whenever the bot sees someone, it will send a message
    if (message.content == "salve") {
        message.reply("Saaalveee quebrada!")
    }
}

exports.default = loggedUser