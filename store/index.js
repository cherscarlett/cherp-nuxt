import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      name: 'Cher Scarlett',
      footerLinks: [
        {
          id: 'github',
          url: 'github.com/cherscarlett'
        },
        {
          id: 'linkedin',
          url: 'linkedin.com/in/cherscarlett'
        },
        {
          id: 'youtube',
          url: 'youtube.com/c/cherpx'
        },
        {
          id: 'twitch',
          url: 'twitch.tv/cherp'
        },
        {
          id: 'twitter',
          url: 'twitter.com/codehitchhiker'
        }
      ]
    },
    mutations: {
    }
  })
}

export default createStore
