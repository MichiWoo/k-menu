<template lang="pug">
nuxt-link(:to="linkTo")
  button(class="p-3 bg-light-primary dark:bg-dark-primary border-light-accent dark:border-text-dark-accent rounded-lg text-light dark:text-dark-text hover:bg-light-accent hover:ring-2 hover:ring-light-accent hover:ring-opacity-50")
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
