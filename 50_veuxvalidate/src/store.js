import Vue from 'vue'
import VueX from 'vuex'
import vueResource from 'vue-resource'


Vue.use(VueX)
Vue.use(vueResource)

export const store = new VueX.Store({
    state: {
        posts: [
            {
                userId: 1,
                id: 1,
                title: "title",
                body: "body"
            },
            {
                userId: 2,
                id: 2,
                title: "vuex",
                body: "body from vuex"
            }
        ],
        message: "message from vuex store"
    },
    getters: {
        getMessageExtra : store => {
            return store.message + " Extra details"
        }
    },
    mutations: {
        sendPosts: state =>{
            Vue.http.post('https://jsonplaceholder.typicode.com/posts',state.posts).then(function(response){
                console.log(response);
            })
        },
        getPosts: state =>{
            Vue.http.get('https://jsonplaceholder.typicode.com/posts').then(function(result){
                state.posts = result.data;
            })
        }
        
    },
    actions: {

    }

})