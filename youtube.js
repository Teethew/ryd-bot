const dotenv = require("dotenv")
const { google } = require('googleapis');
const moment = require('moment')

dotenv.config()

const API_KEY = process.env.API_KEY

const youtube = google.youtube({
    version: 'v3',
    key: API_KEY
})

async function search(query) {
    return await youtube.search.list({
        part: 'snippet',
        maxResults: 1,
        q: query,
        key: API_KEY,
        type: 'video'
    })
}

async function getDuration(id) {
    const res = await youtube.videos.list({
        id: id,
        part: 'contentDetails',
        key: API_KEY
    })
    const iso8601duration = res.data.items[0].contentDetails.duration
    const duration = moment.duration(iso8601duration)
    return `${duration.get('minutes')}:${duration.get('seconds')}`  
}

module.exports = { search, getDuration }