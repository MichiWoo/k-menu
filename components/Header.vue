<template lang="pug">
  header.w-full.mx-auto
    div(class='w-full flex flex-col justify-center')
      div(class='flex justify-center items-center sm:hidden')
        Wavei.w-full
      div(class='flex justify-center items-center')
        Logo
        div
          button(class='text-light-primary transition-colors duration-300 ease-linear focus:outline-none' @click="toggle" v-show="color === 'light'" aria-label="Modo Oscuro")
            Moon
          button(class='text-dark-primary transition-colors duration-300 ease-linear focus:outline-none' @click="toggle" v-show="color === 'dark'" aria-label="Modo Light")
            Gear
</template>

<script>
export default {
  name: 'Header',
  components: {
    Wavei: () => import('../components/images/Wavei'),
    Logo: () => import('../components/images/Logo'),
    Gear: () => import('../components/icons/Gear'),
    Moon: () => import('../components/icons/Moon')
  },
  data () {
    return {
      color: this.$colorMode.value
    }
  },
  methods: {
    toggle () {
      if (this.$colorMode.value === 'light') {
        this.$colorMode.preference = 'dark'
        this.color = 'dark'
      } else {
        this.$colorMode.preference = 'light'
        this.color = 'light'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
