<template lang="pug">
  footer(class='relative w-full text-center mt-12')
    div(class='w-full flex flex-col justify-center mt-6')
      div
        font-awesome-icon(:icon="['fas', 'code']" class='text-light-text dark:text-dark-text')
        span(class='text-light-text dark:text-dark-accent')
          | &nbspcon&nbsp
        span
          span.sr-only
            | love
          span
            font-awesome-icon(:icon="['fas', 'heart']" class='animate-ping heart-background text-light-danger dark:text-dark-danger z-10 svg-inline--fa fa-heart fa-w-16')
          span
            font-awesome-icon(:icon="['fas', 'heart']" class='text-light-primary dark:text-dark-primary svg-inline--fa fa-heart fa-w-16')
        span(class='text-light-text dark:text-dark-accent')
          | &nbsppor Michiwoo © 2020
      div(class='flex space-x-2 justify-center text-xl mt-2')
        a(class='social-media-link relative flex flex-col items-center' href='https://twitter.com/_michiwoo' title='Twitter' rel='noopener noreferer' target='_blank')
          font-awesome-icon(:icon="['fab', 'twitter']" class='text-light-text dark:text-dark-accent')
        a(class='social-media-link relative flex flex-col items-center' href='https://github.com/MichiWoo' title='Github' rel='noopener noreferer' target='_blank')
          font-awesome-icon(:icon="['fab', 'github']" class='text-light-text dark:text-dark-accent')
        a(class='social-media-link relative flex flex-col items-center' href='https://www.instagram.com/_michiwoo/' title='Instagram' rel='noopener noreferer' target='_blank')
          font-awesome-icon(:icon="['fab', 'instagram']" class='text-light-text dark:text-dark-accent')
        a(class='social-media-link relative flex flex-col items-center' href='/' title='Gmail')
          font-awesome-icon(:icon="['far', 'envelope']" class='text-light-text dark:text-dark-accent')
      div(class='flex justify-center items-center sm:hidden')
        Wave.w-full
</template>

<script>
export default {
  name: 'Footer',
  components: {
    Wave: () => import('../components/images/Wave')
  }
}
</script>

<style scoped>
.heart-background {
  min-width: 1em;
  min-height: 1em;
  position: absolute;
  margin-top: 4px;
  opacity: .2;
}
</style>
