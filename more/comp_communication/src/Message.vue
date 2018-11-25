<template>
    <div>
        <h1>My first custom page</h1>
        <!-- 
            <img :src alt="">
        -->

        <!-- 2 -->
        <p> here it will not work! </p>
        <app-input :msg="message"></app-input>

        <hr>
        <!-- 9 delete line 9 and replace with the following. or just show both-->
        <p> here it will WORK! </p>
        <app-input :msg="message" @messageChanged="message = $event"></app-input>

        <br><br>
    </div>
</template>

<script>
    import Input from './input.vue'
    export default {

        // <!-- 1. -->  how to pass data to input component??
        // so lets create data method 
        data() {
            return {
                message: 'This is the message'
            }
        },

        components: {
            'app-input': Input
        }
    }
</script>