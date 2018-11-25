// control the whole part or specific part of the 
// HTML page
// we can create 3 instances and control 3 parts!
new Vue({
    el: "#app", // which ROOT element it is going to control
        // jquery style
    data : {
        name : "itay"
    },
    methods : {
        greet() {
            return 'Good Morning!'
        },
        timeGreet(zTime) {
            return `Good ${zTime}!`
        },
        getName() {
            return this.name // NOT this.data.name
        } 
    }
})