<template>
  <div id="app">
    <h1>Let's go somehwere</h1>
    <hr>
    <router-view></router-view>

    <!-- C_router -->
    <p>not good:</p>
    <a href="/users">Users link</a> <br>
    <hr>
    <router-link to="/users">Users better link</router-link><br>
    <router-link to="/">Home better link</router-link><br>
    <router-link to="/usersTeam/10">Users Team better link 10</router-link><br>
    <router-link to="/usersTeam/12">Users Team better link 12</router-link><br>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
