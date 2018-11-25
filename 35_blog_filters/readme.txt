filter changes the way the data appears on the html,
we do NOT change the actual data

since vue 2 they are not come out-of-the-box due to performance

in this example we have upper case filter

add ANOTHER filter to have only 100 characters
call it snippet
return value.slice(0, 100) + "..."

with arguments:

Vue.filter('truncate', function (value, from, count) {
  return value.substring(from, count)
})

<p>{{filename | truncate(0, 10)}}</p>