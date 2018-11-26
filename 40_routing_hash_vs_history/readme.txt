# does not makes an additional request to the server (like anchor)

to get rid of # you need to set up the server that whenever he sees # he returns the index.html file

if you want history mode ( without hash ): 
you need to tell the server that whenever he sees localhost:8080/... he should return index.html no matter what is after the /
tells the index.html to deal with the /
luckily node js could be easily configured to do so
but for other servers you can look at it here:
https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations

in main.js add:

	in router = { 
	  ...
	 mode: 'history'
	}

default was mode: 'hash'

now browse to:
http://localhost:8080/add
http://localhost:8080/

