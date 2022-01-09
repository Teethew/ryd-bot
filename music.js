function createEmbedResponse(youtubeResponse) {
    const responseData = youtubeResponse.data
    const result = responseData.items[0]
    const id = result.id.videoId
    const snippet = result.snippet
    const thumbnail = snippet.thumbnails.default

    return [{
        thumbnail: {
            url: thumbnail.url
        },
        title: snippet.title,
        description: snippet.description,
        url: `https://youtu.be/${id}`
    }]
}

module.exports = createEmbedResponse