<template lang='haml' src='./Column.haml' />
<style lang='scss' scoped src='./Column.scss' />

<script>
  import Article from '~/components/Article/Article.vue'
  import Video from '~/components/Video/Video.vue'
  import Photo from '~/components/Photo/Photo.vue'

  export default {
    components: {
      Article,
      Video,
      Photo
    },
    props: ['column', 'width'],
    computed: {
      styles () {
        return {
          width: this.width + '%'
        }
      }
    },
    mounted () {
      const media = document.querySelectorAll('[data-type="Video"], [data-type="Photo"]')

      Array.from(media).forEach( video => {
        video.addEventListener('click', (event) => {
          event.preventDefault()
        })
      })
    }
  }
</script>
