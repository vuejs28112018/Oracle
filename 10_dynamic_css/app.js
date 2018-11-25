// control the whole part or specific part of the 
// HTML page
// we can create 3 instances and control 3 parts!
new Vue({
    el: "#app", // which ROOT element it is going to control
        // jquery style
    data : {
        name : "itay",
        age : 25,
        a : 10, 
        b : 10,
        available: false,
        nearby: false        
    
    },
    methods : {
        greet() {
            return 'Good Morning!'
        },    
      
    },

    // 3. add computed - just copy paste from above!!!!
    computed: {
        compClasses: function(){
            return{
                available: this.available,
                nearby: this.nearby,
            }
        }
    }
})