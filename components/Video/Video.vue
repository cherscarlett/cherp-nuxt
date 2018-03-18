<template lang='haml' src='./Video.haml' />
<style lang='scss' scoped src='./Video.scss' />

<script>
  import Lib from '~/assets/lib'
  import Twitch from '~/components/Twitch/Twitch.vue'
  import Youtube from '~/components/Youtube/Youtube.vue'
  import Instagram from '~/components/Instagram/Instagram.vue'
  import Twitter from '~/components/Twitter/Twitter.vue'

  const videoComponents = {
    twitch: Twitch,
    youtube: Youtube,
    instagram: Instagram,
    twitter: Twitter
  }

  let thumbnail = {}

  export default {
    props: ['article'],
    data () {
      return {
        thumbnail: '',
        thumbnailLoaded: false
      }
    },
    mounted () {
      this.getThumbnail(this.article.videoId, this.article.platform)
      this.$Lazyload.$on('loaded', () => {
        this.markThumbnailLoaded()
      })
      this.$el.getElementsByTagName('button')[0].addEventListener('click', () => {
        this.show()
      })
    },
    methods: {
      getThumbnail (videoId, platform) {
        if (!this.article.thumbnail) {
          fetch(Lib.getVideoSnippetUrl(videoId, platform)[platform]).then(response => response.json()).then(data => {
            this.thumbnail = Lib.getThumbnailUrl(data, platform).url
          }).catch( error => console.log(error))
        }
      },
      markThumbnailLoaded () {
        this.thumbnailLoaded = true
      },
      show () {
        const component = videoComponents[this.article.platform]
        const theme = (this.article.platform === 'instagram') ? 'light' : 'dark'

        this.$modal.show(component, {
          videoId: this.article.videoId,
          url: this.article.url
        }, {
          height: 'auto',
          width: '100%',
          transition: 'expand',
          classes: ['v--modal', 'v--modal-' + theme, 'v--modal-' + this.article.platform]
        })
      },
      hide () {
        this.$modal.hide(this._uid)
      }
    },
    computed: {
      thumbnailAwait () {
        if (this.article.thumbnail || this.thumbnail.length > 0) { return true }
        else { return false }
      },
      styles () {
        return {
          backgroundImage: 'url(' + this.article.platform + '.svg)'
        }
      }
    }
  }
</script>
