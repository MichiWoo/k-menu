<template lang="pug">
  div(class='home max-w-full md:max-w-screen-md mx-auto xl:max-w-screen-lg px-5 pb-4 sm:pb-0 w-full mx-auto flex-1 mb-4 sm:mb-0')
    div(class='w-full flex flex-col justify-center')
      h1(class='text-lg font-bold mb-2 mt-8 text-light-text dark:text-dark-primary')
        | ¡Hola, que bueno verte de nuevo!
      h4(class="text-light-text dark:text-dark-accent")
        | Coloca tus datos para ingresar a la aplicación
      div.py-6.flex.items-center.justify-center
        Input(placeholder="Usuario" typeInput="text")
</template>

<script>
export default {
  name: 'Login',
  components: {
    Input: () => import('../components/Input')
  }
}
</script>

<style lang="scss" scoped></style>
