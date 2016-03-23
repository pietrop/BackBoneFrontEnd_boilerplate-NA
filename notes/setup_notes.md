# Setup

using node

```
|-index.html
|- app.js
```

## node
<!-- `npm init -y`
to start a project.
`-y`  adds all default details -->

dependencies to install
- backbone
- jquery
- browserify
- watchify
- brfs


`brfs` allows browserify to read a file, and to set up `npm start` to
`"start": "watchify -t brfs -o bundle.js app.js",`

<!-- npm install backbone --save -->

run `npm  install` to install the dependencies.


## `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>autoEdit</title>
  </head>
  <body>
    <div id="root"></div>

    <script src="bundle.js" charset="utf-8"></script>
  </body>
</html>
```

`bundle.js` is a file that is generated when backbone is compiled using comand from `npm start`.

## `app.js`

`app.js` contains the application

## `api/index.js`

`api` module is what backboen connects to for the backend.

in the desktop app, that will run through NWJS this will connecto to modules for system calls (ie opening a file etc..)

if deployed as a front end app, api module can be swapped for a connection to restfull API backend app. ie implemented in sailsjs or else.

alternative to using this custom api module
is to use backbone sync.

http://backbonejs.org/#Sync
