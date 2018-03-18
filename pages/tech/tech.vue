<template lang='haml' src='./tech.haml' />

<script>
  import Page from '~/components/Page/Page.vue'
  import Lib from '~/assets/lib'

  export default {
    components: {
      Page
    },
    computed: {
      columns () {
        return Lib.buildColumns(this.$store.state.content['tech'])
      }
    }
  }
</script>
