import Vue from 'vue'
import App from './App.vue'
import Message from './Message.vue'  // we not export in Message.vue webpack do it behind the scenes

/*
 if you want you can register the component in the global Vue 
 and it will be available for all vue.
 this will be an alternative to code in Message.vue:

    import Input from './input.vue'
    export default {
        components: {
            'app-input': Input
        }
    }
*/
//import Input from './input.vue'

Vue.component('app-message', Message)
//Vue.component('app-input', Input)

new Vue({
  el: '#app',
  render: h => h(App)
})
