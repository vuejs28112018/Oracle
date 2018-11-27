<template>
 <div  class="Test">
     <h1>  id = {{id}}   </h1>
    <h1> {{msg}}</h1>
    <h2> {{propdata}} </h2>
    <h2 v-text = "propdata" ></h2>
    <p v-html = "msg" v-if = "show" ></p>
    <h1 v-if="show">{{msg}}</h1>
    <ul>
        
        <li v-for="user in users" :key="user.id"> 
             <input type="checkbox" v-model = "user.show">
             {{user.name}} pass: {{user.pass}}
             <span v-if = "user.show"> Show </span>
               </li>
    </ul>
    <input type="text" v-model="msg">
<hr>

    <button v-on:click="changeTitle('dor')">change message</button>
     </div>

</template>

<script>
export default {
  name: "Test",
  
  props: {
    propdata: {
      type: String,
      default: "test prop default"
    }
  },
  data() {
    return {
      msg: "<h1>hello vue data </h1>",
      id: this.$route.params.id,
      users: [
        { name: "user1", pass: "1234", show: true },
        { name: "user2", pass: "1234", show: false },
        { name: "user3", pass: "1234", show: true }
      ],
      bgColor: "yellow",
      bgWidth: "100%",
      bgHeight: "50",
      show: false
    };
  },
  methods: {
    changeTitle: function(msg) {
      this.msg = msg;
    }
  },
  created : function() {
      console.log('created')
  },
    updated : function() {
      console.log('updated')
  }
};
</script>


<style scoped>
</style>