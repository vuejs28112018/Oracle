// control the whole part or specific part of the 
// HTML page
// we can create 3 instances and control 3 parts!
new Vue({ 
    el: "#app", // which ROOT element it is going to control
        // jquery style
    data : {
        name : "itay",
        age : 25,
        x : 0,
        y : 0
    },
    methods : {
        greet() {
            return 'Good Morning!'
        },
        updateXY(event) {
            // look it has many attributes!!            
            console.log( event )

            this.x = event.offsetX;
            this.y = event.offsetY;
        }

    }
})