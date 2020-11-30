<template lang="pug">
input(class="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-light-text dark:text-dark-accent focus:text-light-primary focus:outline-none focus:border-light-primary dark-focus:text-dark-accent dark-focus:border-dark-accent" :type="typeInput" :placeholder="placeholder")
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
