<template lang='haml' src='./animals.haml' />
<style lang='scss' scoped src='./animals.scss' />

<script>
  import Page from '~/components/Page/Page.vue'
  import Animal from '~/components/Animal/Animal.vue'
  import Lib from '~/assets/lib'

  export default {
    components: {
      Page,
      Animal
    },
    computed: {
      columns () {
        return Lib.buildColumns(this.$store.state.content['animals'])
      },
      animals () {
        return this.$store.state.animals
      }
    }
  }
</script>
