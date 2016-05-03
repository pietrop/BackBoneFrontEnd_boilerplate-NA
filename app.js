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

    className: 'container',

    events: {
        'click #project-btn': 'showProjects'
    },

    showProjects: function() {
        location.href = "#projects";
        // this.render();
    },

    initialize: function() {
        $("#root").html(this.el);
        this.render();
    },

    template: _.template(fs.readFileSync('./templates/home.html', 'utf8')),

    render: function() {
        this.$el.html(this.template());
        return this;
    }
});

var Router = Backbone.Router.extend({

    routes: {
        "": "home",
        "projects": "projects" // #projects
    },

    projects: projects.list,

    home: function() {
        this.view = new HomeView();
    }

});

var router = new Router;
Backbone.history.start();

Backbone.sync = function(method, model, options) {

    console.log('sync', arguments.length)
};
