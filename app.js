
/**
 * Module dependencies
 */

 var Backbone = require('backbone');
 var _ = require('underscore');
 var $ = require('jquery');
 var fs = require('fs');

var projects = require('./projects');
// var home = require('./home');

var HomeView = Backbone.View.extend({
  tagName: 'div',

  // className: 'hi',

  initialize: function() {
    $("#root").html(this.el);
    this.render();
  },

  template: _.template(fs.readFileSync('./templates/home.html', 'utf8')),

  render: function() {
    this.$el.html(this.template({  }));  //don't get why it needs to have an empty template call
    return this;

    // home: this.collection.models
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
