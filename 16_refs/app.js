new Vue({
    el: '#vue-app-one',
    data: {
        output: ''
    },
    methods: {
        readRefs: function(){
            console.log(this.$refs);
            this.output = this.$refs.input.value;
			console.log(this.$refs.mydiv.innerHTML);
        }
    }
});
