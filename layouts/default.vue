<template lang="pug">
  div.flex.flex-col.h-screen
    Header
    div.divide-y.divide-gray-200
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
