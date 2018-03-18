<template lang='haml' src='./Animal.haml' />
<style lang='scss' scoped src='./Animal.scss' />

<script>
  export default {
    props: ['animal'],
    methods: {
      typeOrClass() {
        return Boolean(this.animal.class === 'Mammal') ? this.animal.type : this.animal.class
      },
      sexColor() {
        return Boolean(this.animal.sex === 'female') ? '#FF5CB8' : '#22a5e2'
      },
      getRotation() {
        const rotations = {
          Dog: '25deg',
          Rodent: '-20deg',
          Reptile: '-25deg',
          Fish: '20deg'
        }
        return rotations[this.typeOrClass()]
      }
    },
    computed: {
      hasPhoto () {
        return Boolean(this.animal.photo)
      },
      classification () {
        return this.typeOrClass()
      },
      styles () {
        return {
          backgroundColor: this.sexColor(),
          maskImage: 'url(' + this.typeOrClass() + '.svg)',
          transform: 'rotate(' + this.getRotation() + ')'
        }
      }
    }
  }
</script>
