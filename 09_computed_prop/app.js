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
        b : 10
    
    },
    methods : {
        greet() {
            return 'Good Morning!'
        },    
        addToA() {
            console.log("Add to A")
            return this.a + this.age
        },
        addToB() {
            console.log("Add to B")
            return this.b + this.age
        }        
    },

    // 3. add computed - just copy paste from above!!!!
    computed: {
        addToA_cp() {
            console.log("Add to A computed")
            return this.a + this.age
        },
        addToB_cp() {
            console.log("Add to B computed")
            return this.b + this.age
        }         
    }
})