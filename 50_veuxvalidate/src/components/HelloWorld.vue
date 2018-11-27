<template>
  <div class="hello">
    <input type="text" v-model="message">
    <p> your message is {{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: ""
    }
  }
}
</script>

<style scoped>
h1{
  font-weight: normal;
  color: blue
}
</style>
