<template lang='haml' src='./gaming.haml' />
<style lang='scss' scoped src='./gaming.scss' />

<script>
  import Page from '~/components/Page/Page.vue'
  import Lib from '~/assets/lib'

  export default {
    components: {
      Page
    },
    computed: {
      columns () {
        return Lib.buildColumns(this.$store.state.content['gaming'])
      }
    }
  }
</script>
