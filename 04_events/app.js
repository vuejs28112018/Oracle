// control the whole part or specific part of the 
// HTML page
// we can create 3 instances and control 3 parts!
new Vue({
    el: "#app", // which ROOT element it is going to control
        // jquery style
    data : {
        name : "itay",
        age : 25
    },
    methods : {
        greet() {
            return 'Good Morning!'
        },
        add1() {
            this.age++;
        },
        sub1() {
            this.age--;
        },
        dbladd() {
            this.age += 10;
        },
        dblsub() {
            this.age -= 10;
        }


    }
})