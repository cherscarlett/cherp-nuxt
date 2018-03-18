<template lang='haml' src='./Page.haml' />
<style lang='scss' scoped src='./Page.scss' />

<script>
  import Column from '~/components/Column/Column.vue'

  export default {
    components: {
      Column
    },
    props: ['title', 'columns']
  }
</script>
