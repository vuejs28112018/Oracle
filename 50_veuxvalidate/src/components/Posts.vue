<template>
<div class="main">

    <h2>Add post</h2>
    <form v-on:submit= "addPost ">
        <select v-model = "actionForm" v-validate = "{is_not: 'null'}" name="actionForm">
            <option value = "null" selected hidden = "true">Plese select action </option>
            <option value = "create">Create post</option>
            <option value = "update">Update post</option>
        </select>
        <input type="number" v-model= "idToEdit" v-if="this.actionForm == 'update'" placeholder="Post id to edit">
         <b class = "alert" v-if="errors.has('actionForm')">The action field is required</b>
        <input type="text" v-model = "newPost.title" placeholder="Enter title" v-validate="'required'" name="title">
        <b class = "alert" v-if="errors.has('title')">{{ errors.first('title')}}</b>
        <br>
        <input type="text" v-model = "newPost.body" placeholder="Enter body" v-validate="'required'" name="body">
        <b class = "alert" v-if="errors.has('body')">{{ errors.first('body')}}</b>
        <br>
        <select v-model = "newPost.userId" v-validate= "{is_not: 'null'}" name="userId">
            <option value = "null" selected hidden = "true">Plese select user</option>
            <option value = "1" >Dor</option>
            <option value = "2">Moshe</option>
            <option value = "3">Yaniv</option>
        </select>
        <b class = "alert" v-if="errors.has('userId')">The user id field is required</b>
        <br>
        <input type="text" v-model = "newPost.email" v-validate= "{ email:true, required: true }" placeholder="Enter your E-Mail" name="email">
        <b class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</b>
        <br>
        <input id="submit" type="submit" value="Submit">
        <br>
    </form>
    <br>

    <h2> Current posts</h2>
    <div class="btn-grp">
    <button id="get" v-on:click= "getPosts">Get posts</button>
    <button id="post" v-on:click= "sendPosts">Send posts</button>
    <button id="put" >Get posts</button>
    <button id="delete" >Send posts</button>
    </div>
    <ul v-for = "post in posts" :key="post.id">
        <li>userId: {{post.userId}}</li>
        <li>postId: {{post.id}}</li>
        <li>title: {{post.title}}</li>
        <li>body: {{post.body}}</li>
        
    </ul>
    
</div>
</template>

<script>
import HelloWorld from './HelloWorld';
export default {
  name: "Posts",
  data() {
    return {
      actionForm: "null",
      idToEdit: null,
      newPost: {
          userId: "null"
      },
      currentId: 3,
      validated: false
    }
  },
  methods:{
      visibleFormCrud: function(event) {
      return true
      },
    addPost: function(event){
        event.preventDefault();
        this.$validator.validateAll().then((result)=>{
            if(result){
                this.$store.state.posts.push({
                    userId: this.newPost.userId,
                    id: this.currentId,
                    title: this.newPost.title,
                    body: this.newPost.body
                })
                this.currentId++;
                this.newPost = { userId: "null"}
            }
        })
    },
    sendPosts: function(){
        this.$store.commit('sendPosts')
    },
    getPosts: function(){
        this.$store.commit('getPosts')
    }
    
  } ,
  updated: function(){
  },

  computed: {
      posts() {
          return this.$store.state.posts
      },
      message() {
          return this.$store.getters.getMessageExtra
      },

  }
};

</script>

<style scoped>
.main{
    background-color: #f1f1f1;
}
h2 {
    text-align: center;
}
form {
    border: 1px solid grey;
    border-radius: 8px;
    margin-left: 25%;
    margin-top: 25px;
    align-self: center;
    background-color: rgba(255, 255, 255, 0.699);
    width: 50%;
}
ul{
    border: 1px solid grey;
    border-radius: 8px;
    margin-left: 25%;
    margin-top: 25px;
    align-self: center;
    background-color: rgba(255, 255, 255, 0.699);
    width: 50%;
    list-style-type: none;
}
li {
    margin: 10px;
}

input {
    width: 90%;
    padding: 8px 10px;
    border: 1px solid grey;
    border-radius: 4px;
    background-color: #f1f1f1;
    margin-top: 10px;
    margin-left: 15px;
}
select {
    width: 94%;
    padding: 8px 10px;
    border: 1px solid grey;
    border-radius: 4px;
    background-color:#f1f1f1;
    margin-top: 10px;
    margin-left: 15px;
}
input[type=submit]{
    color: white;
    width: 30%;
    padding: 8px 10px;
    border: 1px solid grey;
    border-radius: 15px;
    background-color: #37af4b;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
}
button{
    color: white;
    width: 20%;
    padding: 8px 10px;
    border: 1px solid grey;
    border-radius: 15px;
    background-color: #37af4b;
    cursor: pointer;
}
.btn-grp{
    width: 50%;
    margin-left: 25%;
}
b{
    margin: 20px;
    color: red;
}
</style>