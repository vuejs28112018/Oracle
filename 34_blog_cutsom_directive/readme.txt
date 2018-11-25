custom directives:
we used directives  before: like v-if, v-for all these are directives
they start with v-
and we add them to HTML like attributes
if behavior we want does not exist we create a new directive

if i want each title to be a random color 
so i go:
<h2 v-rainbow>{{blog.title}}</h2>

we could also add data:
<h2 v-rainbow="something">{{blog.title}}</h2>

we add directive in main.js
Vue.directive('rainbow', {
    bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
    }
});

we use a lifecycle hook called binding (when the directive is bound to the element): this bind takes- el, binding, virtual-node
binding will be used to pass parameters

we have 2 directives here:
rainbow [without parameter]
theme [with parameter 'wide' 'narrow']