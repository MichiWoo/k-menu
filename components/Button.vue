<template lang="pug">
nuxt-link(:to="linkTo")
  button(class="p-3 bg-red-400 border-red-600 rounded-lg text-white hover:bg-yellow-500 hover:ring-2 hover:ring-yellow-500 hover:ring-opacity-50")
    | {{ text }}
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: ''
    },
    linkTo: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
