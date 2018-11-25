Vue.component('greeting', {
    template: '<div><p>Hey there, I am a re-usable component</p><p>I am {{name}} <button v-on:click="changeName()">change name </button></p></div>',
	data: function() {
		return {
			name: 'Luigi'
		}
	},
	methods: {
		changeName() {
			this.name = "Mario"
		}
	}
});

/* new Vue({
    el: '.test',
    template: '<p>I am a template</p>'
}); */

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});
