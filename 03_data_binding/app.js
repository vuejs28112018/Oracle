// control the whole part or specific part of the 
// HTML page
// we can create 3 instances and control 3 parts!
new Vue({
    el: "#app", // which ROOT element it is going to control
        // jquery style
    data : {
        name : "itay",
        website : "https://vuejs.org/",
        webLink : `<a href="https://vuejs.org/">Click to site</a>`
    },
    methods : {
        greet() {
            return 'Good Morning!'
        },

    }
})