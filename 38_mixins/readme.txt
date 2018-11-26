code for re-use 
for example how can we use filteredBlogs computed property - in other components, without duplicating the code?
answer: we will put the code into a mixin and re-use it!

we create listBlogs [just for the example] and how do we import the computed filter to it?
we create searchMixin.js
and then we will use the mixin computed property in showBlogs + listBlogs



