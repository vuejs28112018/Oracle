<template>
    <div>
    
        <input type="text" v-model="message" placeholder="input text">
        <p>message = {{message}}</p>
        
        <!-- 4 -->
        <p> msg = {{msg}}</p>        

        <!-- 5. this will not work:
        <input type="text" v-model="msg" placeholder="input text">
        -->

        <!-- 6. so the solution to 5 is -->
        <input type="text" :value="msg" @input="changeMessage">

    </div>
</template>

<script>
    export default {

        // <!-- 3. -->
        props: ['msg'],

        data() {
            return {
                message:''
            }
        },

        //<!-- 7 -->
        methods: {
            changeMessage(event) {
                this.message = event.target.value;

                // <!-- 8 --> now run and modify the lower text box -> it changes the text but brings it back?
                // why? because parent value was not changed , solution: emit
                // $ means vue function. it inform the parent component
                this.$emit('messageChanged', this.message)

            }
        }
    }
</script>