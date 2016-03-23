# local storage
<!-- from conversation with Dan -->


## NWJS persistent data  - option 1

https://github.com/nwjs/nw.js/wiki/save-persistent-data-in-app

https://github.com/nwjs/nw.js/wiki/Differences-of-JavaScript-contexts


## Local storage - option 2

if you abstract the db as we talked yesterday then you can just change that piece of code

and using localStorage for now you can still work on the browser without nwjs

http://captainkuro.com/javascript/accessing-file-system-with-node-webkit/?ckattempt=2

to save to local storage
```
localStorage.db = JSON.stringify(data)
```
and then to retrieve
```
var db = JSON.parse(data)
```

https://github.com/jeromegn/Backbone.localStorage


http://mcgivery.com/localstorage-how-much-is-5mb/
although you should actually plan for only ~2.5MB due to Chrome’s limitation

if you hit your 5 mb (which I doubt) you can change your strategy
 to persist into filesystem

 https://github.com/nwjs/nw.js/wiki/node-main
