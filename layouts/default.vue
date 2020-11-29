<template lang="pug">
  div.flex.flex-col.h-screen
    Header
    div(class="divide-y divide-light-text dark:divide-dark-accent")
      Nuxt
      Footer
</template>

<script>
export default {
  components: {
    Header: () => import('../components/Header'),
    Footer: () => import('../components/Footer')
  }
}
</script>

<style></style>
