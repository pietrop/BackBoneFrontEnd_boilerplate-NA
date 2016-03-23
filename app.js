
/**
 * Module dependencies
 */

 var Backbone = require('backbone');
 var _ = require('underscore');
 var $ = require('jquery');

var projects = require('./projects')

 var a = require('./db.json')

var HomeView = Backbone.View.extend({
  tagName: 'div',

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
