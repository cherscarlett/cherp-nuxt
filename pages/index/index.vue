<template lang='haml' src='./index.haml' />
<style lang='scss' scoped src='./index.scss' />

<script>
  import Cat from '~/components/Cat/Cat.vue'
  import Intro from '~/components/Intro/Intro.vue'

  export default {
    components: {
      Cat,
      Intro
    }
  }
</script>
