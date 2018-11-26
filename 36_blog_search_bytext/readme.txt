Here we would like to add a search text box to filter blogs
due to performance we cannot go like Angular {{ blogs | search-filter }}

we use computed properties

we will replace blogs with filtered blogs
(not really a filter)

js:
~~~
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

function myFunction() {
    document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}



String.prototype.match() // faster
String.prototype.includes()
