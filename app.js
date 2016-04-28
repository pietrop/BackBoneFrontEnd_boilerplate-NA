
/**
 * Module dependencies
 */

 var Backbone = require('backbone');
 var _ = require('underscore');
 var $ = require('jquery');

var projects = require('./projects')


// does this file render just the home view? therefore isn't it better to have a separate view file in the view


var HomeView = Backbone.View.extend({
  tagName: 'article',

  className: 'hi',

  initialize: function() {
    $("#root").html(this.el);
    this.render();
  },

  render: function() {
    this.$el.html('<p>Hi, go to <a href="#projects">my projects</a>!</p>');
    return this;
  }
});


//----------------------------------------------
 // does the routing need to stay in a separate file?

 var Router = Backbone.Router.extend({

   routes: {
     "": "home",
     "projects":  "projects"    // #projects
   },

   projects: projects.list,

   home: function () {
     this.view = new HomeView();
   }

});

var router = new Router;
Backbone.history.start();

Backbone.sync = function(method, model, options) {

console.log('sync', arguments.length)
};
