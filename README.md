## FOLDER STRUCTURE
```
/
  |--css/
  |  |--materialize.css <-- compiled from scss/materialize.scss
  |
  |--fonts/
  |  |--roboto/
  |
  |--js/
  |  |--materialize.js
  |
  |--assets/
  |  |--imgs/
  |     
  |--scss/
  |  |--materialize.scss <---- materializeCss
  |  |--components/   <---- materializeCss
  |  |--partials/  <---- custom elements
  |  |--modules/  <---- cusom modules  
  |
  |--index.html
```



stylesheets/
|
|-- modules/              # Common modules
|   |-- _all.scss         # Include to get all modules
|   |-- _utility.scss     # Module name
|   |-- _colors.scss      # Etc...
|   ...
|
|-- partials/             # Partials
|   |-- _base.sass        # imports for all mixins + global project variables
|   |-- _buttons.scss     # buttons
|   |-- _figures.scss     # figures
|   |-- _grids.scss       # grids
|   |-- _typography.scss  # typography
|   |-- _reset.scss       # reset
|   ...
|
|-- vendor/               # CSS or Sass from other projects
|   |-- _colorpicker.scss
|   |-- _jquery.ui.core.scss
|   ...
|
`-- main.scss            # primary Sass file

## SASS COMPILING INSTRUCTIONS

``sass sass/materialize.scss materialize.min.css``