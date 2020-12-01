<template lang="pug">
input(class="w-full mt-6 mb-6 px-4 py-4 bg-light rounded-lg border-light-transparent shadow-md text-light-text focus:outline-none focus:text-light-primary focus:ring-2 focus:ring-light-primary dark:bg-dark dark:text-dark-text dark-focus:outline-none dark-focus:text-dark-primary dark-focus:ring-2 dark-focus:ring-dark-primary" :type="typeInput" :placeholder="placeholder")
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    typeInput: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      text: ''
    }
  },
  watch: {
    text () {
      this.$emit('changeText', this.text)
    }
  }
}
</script>

<style lang="scss" scoped></style>
