<template lang='haml' src='./Photo.haml' />
<style lang='scss' scoped src='./Photo.scss' />

<script>
  import Lightbox from '~/components/Lightbox/Lightbox.vue'

  export default {
    props: ['article'],
    mounted () {
      this.$el.getElementsByTagName('button')[0].addEventListener('click', () => {
        this.show()
      })
    },
    methods: {
      show () {
        this.$modal.show(Lightbox, {
          image: this.article.src
        }, {
          height: 'auto',
          transition: 'expand',
          width: '75vh',
          classes: ['v--modal', 'v--modal-lightbox']
        })
      },
      hide () {
        this.$modal.hide(this._uid)
      }
    },
    computed: {
      styles () {
        return {
          backgroundImage: 'url(' + this.article.publisher + '.svg)'
        }
      }
    }
  }
</script>
