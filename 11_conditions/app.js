// control the whole part or specific part of the 
// HTML page
// we can create 3 instances and control 3 parts!
new Vue({
    el: "#app", // which ROOT element it is going to control
        // jquery style
    data : {
        name : "itay",
        age : 25,
        error: false,
        success: false 
    
    },
    methods : {
        greet() {
            return 'Good Morning!'
        },    
      
    },

    // 3. add computed - just copy paste from above!!!!
    computed: {
    }
})