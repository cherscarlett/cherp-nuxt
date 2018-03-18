export default {
  getVideoSnippetUrl(videoId) {
    return {
      twitch: `https://api.twitch.tv/kraken/videos/${videoId}?client_id=${
        process.env.twitchClientId
      }`,
      youtube: `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${
        process.env.youTubeClientId
      }`
    }
  },
  getThumbnailUrl(data, platform) {
    if (platform === 'twitch') return { url: data.preview }
    if (platform === 'youtube')
      return { url: data.items[0].snippet.thumbnails.maxres.url }
  },
  buildColumns(content) {
    const columns = Object.keys(content).map(column => {
      const items = content[column].items.sort((x, y) => {
        return new Date(y.date).getTime() - new Date(x.date).getTime()
      })
      return {
        title: column,
        articles: items,
        type: content[column].type
      }
    })
    return columns
  }
}
