what if we want to use filters or directives only locally?

no need to register them in the global scope

(1)
we remove the Filters from main.js -- comment
and add into showBlogs:
... after computed
    filters: {
        
	toUppercase(value)
	{	

            return value.toUpperCase();
        
	}
    },

(2)
we also move the directive from main.js
// Custom directives

Vue.directive('rainbow', {
    bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
    }
});

and add into showBlogs:
... after filters
    filters: {
        
	toUppercase(value)
	{
            
		return value.toUpperCase();
        
	}
    },
    
	directives: {
        
		'rainbow' :{
            
			bind(el, binding, vnode){
                
				el.style.color = "#" + Math.random().toString(16).slice(2, 8);
            
				}
			   }
    
	}