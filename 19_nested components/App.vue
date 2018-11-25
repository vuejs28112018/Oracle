<template>
    <div>
        <h1>{{ title }}</h1>
        <ninjas></ninjas>
    </div>
</template>

<script>
// Imports
import Ninjas from './Ninjas.vue';

// step 2 - local import => write components and list the components you like to import
// give them a name for example 'ninjas' as a selector in the HTML
export default {
    components: {
        'ninjas': Ninjas
    },
    data () {
        return {
          title: 'Ninja App'
        }
    }
}
</script>

<style>
</style>
