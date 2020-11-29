<template lang="pug">
  header.w-full.mx-auto
    div(class='w-full flex flex-col justify-center')
      div(class='flex justify-center items-center sm:hidden')
        Wavei.w-full
      div(class='flex justify-center items-center')
        Logo
</template>

<script>
export default {
  name: 'Header',
  components: {
    Wavei: () => import('../components/images/Wavei'),
    Logo: () => import('../components/images/Logo')
  }
}
</script>

<style lang="scss" scoped></style>
