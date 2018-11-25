import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';

import Users from './Users.vue';
import UsersTeam from './UsersTeam.vue';
import Home from './Home.vue';

// use -- calls plugin. i will call the router plugin
Vue.use(VueRouter);

const routes = [
  { path: '/users', component: Users},
  { path: '/usersTeam/:teamId', component: UsersTeam},
  { path: '/', component: Home},

]

const router = new VueRouter({
  routes, // same as routes: routes es6
  mode:'history', // mode history is where we not need the #
});



new Vue({
  el: '#app', 
  router, // or router: router es6
  // now browse to http://localhost:8080/#/users
  // now browse to http://localhost:8080/#
  // why if this # ?
  //    it gets added automatically - for routes the part infront # is handled by the server
  //    so how the server should know that it should not hanlde it ?
  //    answer because of the # which says to the server I am handling it!
  //    Add line 20 and then browse to http://localhost:8080/users
  //    http://localhost:8080/
  //    http://localhost:8080/users

  render: h => h(App)
})
