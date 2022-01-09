const dotenv = require("dotenv")
const { google } = require('googleapis');

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
        key: API_KEY
    })
}

module.exports = search