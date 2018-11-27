// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld'
import Test from './components/Test'
import Posts from './components/Posts'
import vueResource from 'vue-resource'
import {store} from './store'
import VeeValidate from 'vee-validate';

Vue.use(VueRouter)
Vue.use(vueResource)
Vue.use(VeeValidate)


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/test/:id',
      component: Test
    },
    {
      path: '/posts',
      component: Posts
    }
  ]
});
/* eslint-disable no-new */
new Vue({
store: store,
router,
VeeValidate,
template: `
<div id="app">
  <nav>
    <a> <router-link to="/" > Hello </router-link></a>
    <br>
    <a> <router-link to="/test/2" > Test </router-link></a>
    <br>
    <a> <router-link to="/posts" > Posts </router-link></a>
  </nav>
  <router-view></router-view>
</div>
`
}).$mount('#app')
