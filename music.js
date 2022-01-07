class Music {

    static playMusicIfAsked(prefix, message) {
        let musicCommand = prefix + "p "

        if (message?.content.startsWith(musicCommand)) {
            const guild = message.guild
            const user = message.author
            //message.reply(`eh pra eu tocar ${message.content.replace(musicCommand, "")} ?`)
            message.reply(`Olá ${message.author.username}, por acaso vc me pediu pra tocar **${message.content.replace(musicCommand, "")}** no servidor de id ${message.guild.id}?`)

            guild.members.search({
                query: user.username
            }).then(list => {
                list.forEach((member) => {
                    //if the bot find the message author in the guild members
                    if (member.user.username == user.username) {
                        message.reply("working!")
                    }
                })
            })

            guild.channels.fetch().then(channels => {

                channels.filter(channel => channel.type == "GUILD_VOICE")
                        .forEach(channel => channel.members
                            .forEach(member => {
                                if (member.user.username === user.username) {
                                    const options = {
                                        channelId: channel.id,
                                        guildId: channel.guildId,
                                        selfDeaf: true
                                    }
                                    console.log(options)
                                    const subscription = Voice.joinVoiceChannel(options)
                                }

                                return
                            })
                        )
            })
        }

        return
    }
}

module.exports = Music