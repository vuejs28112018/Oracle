<template>
    <div>
        <p>Users</p>
        <p>Team ID is {{ $route.params.teamId }}</p>
        <p>Team ID is {{ teamId }}</p>
        <!-- change the number in the url itself and see the change -->
        <br><br>

        <!-- then add this -->
        <button @click="goHome">Go Home</button>

    </div>
</template>

<script>

    export default {
        created() {

            //alert(this.$route.params.teamId)

            // the problem that this alert will not be shown each time.
            // we need to go to home link and then back to get the alert again

            // so solution: use watch
        },
        watch: {
            // this solves the problem in the alert in the created above
            '$route' (to, from) {
                alert(to.params.teamId);
            }
        },
        data() {
            return { }
        },

        components: {
        },

        methods: {
            goHome() {
                // its a stack since we can go back to the last link
                this.$router.push('/');
            }
        }
    }
</script>