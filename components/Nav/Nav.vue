<template lang='haml' src='./Nav.haml' />
<style lang='scss' scoped src='./Nav.scss' />

<script>
  import NavLink from '~/components/NavLink/NavLink.vue'
  import Logo from '~/components/Logo/Logo.vue'

  export default {
    components: {
      NavLink,
      Logo
    },
    created() {
      this.$router.options.routes.forEach(route => {
        if (route.path !== '/') {
          this.links.push({
            name: route.name,
            path: route.path
          })
        }
      })
    },
    data() {
      return {
        links: []
      }
    }
  }
</script>
