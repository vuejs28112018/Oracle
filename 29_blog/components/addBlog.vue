<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form>
            <label>Blog Title:</label>
            <!-- can start with title + content and then isert into blog object -->
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <!-- can start with title + content and then isert into blog object -->
            <textarea v-model.lazy.trim="blog.content"></textarea>
        </form>
        <div id="preview">
            <h3>Preview blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p style="white-space: pre">{{ blog.content }}</p>
        </div>
    </div>
</template>

<script>
// Imports

export default {
    data () {
        // can start with title + content and then isert into blog object
        return {
            blog: {
                title: '',
                content: ''
            }
        }
    },
    methods: {

    }
}
</script>

<style>
/* the box-sizing property defines how the width and height of an element are calculated: should they include padding and borders, or no */
/* star selects all elements inside */
#add-blog *{
    box-sizing: border-box;
}
/* only for add-blog */
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
</style>
