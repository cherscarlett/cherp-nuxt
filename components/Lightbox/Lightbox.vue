<template lang='haml' src='./Lightbox.haml' />
<style scoped lang='scss' src='./Lightbox.scss' />

<script>
  import Loader from '~/components/Loader/Loader.vue'

  export default {
    data () {
      return {
        loading: false,
        width: '0px'
      }
    },
    components: {
      Loader
    },
    props: ['image'],
    mounted () {
      this.$Lazyload.$on('loaded', ({ el }) => {
        this.loaded((el.naturalWidth/el.naturalHeight) * 85)
      })
    },
    methods: {
      loaded (width) {
        this.width = width + 'vh'
        if (this.$el.parentElement && width >= 20) this.$el.parentElement.style.width = this.width
        this.loading = false
      }
    }
  }
</script>
