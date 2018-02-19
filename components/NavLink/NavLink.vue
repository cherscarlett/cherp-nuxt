<template lang='haml' src='./NavLink.haml' />
<style lang='scss' scoped src='./NavLink.scss' />

<script>
  export default {
    props: ['link'],
    computed: {
      styles () {
        return {
          backgroundImage: 'url(' + this.link.name + '.svg)'
        }
      }
    }
  }
</script>
