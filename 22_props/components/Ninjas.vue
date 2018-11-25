<template>
    <div id="ninjas">
        <ul>
            <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
                <h2>{{ ninja.name }}</h2>
                <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
            </li>
        </ul>
    </div>
</template>
<script>
export default {


	  // 1. without validation:
	  // props : ['ninjas'],
	  // data() ....

	  // 2. with validation [not a must]:
    props: {
      ninjas: {
        type: Array, // if you write
					 // type:String 
					 // if will fail! [since we pass array] you can see the error in the console
        required: true // if you try not sending you see an error in the console
      }
    },
	
	
    data(){
        return{

        }
    },
	methods: {
	  test() {
		console.log(this.ninjas);
	  }
}
</script>
<style scoped>
#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
