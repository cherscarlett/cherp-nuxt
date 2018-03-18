require('dotenv').config()

module.exports = {
  env: {
    twitchClientId: process.env.TWITCH_CLIENT_ID || 'failed',
    youTubeClientId: process.env.YOUTUBE_CLIENT_ID || 'failed'
  },
  plugins: [
    '~/plugins/vue-moment',
    '~/plugins/vue-lazy-load',
    '~/plugins/vue-modal'
  ],
  head: {
    title: 'Cher Scarlett || Code Hitchhiker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Personal website of Cher Scarlett.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Raleway:400,500i,800|Playfair+Display:400i'
      }
    ]
  },
  loading: {
    height: '5px',
    color: 'transparent'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    scss: [
      require('autoprefixer')({
        browsers: ['> 5%']
      })
    ],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
