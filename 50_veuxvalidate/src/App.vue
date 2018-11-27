<template>
  <div id="app">
    <img src="./assets/logo.png">
    <test></test>
    <!-- <nav>
      <router-link to="/"> Hello </router-link>
      <router-link to="/test"> Test </router-link>
    </nav>

    <router-view></router-view> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Test from './components/Test'

export default {
  name: 'App',
  components: {
    Test
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
