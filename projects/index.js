var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var fs = require('fs')
var api = require('../api')

var ProjectModel = Backbone.Model.extend({
  defaults: {
    name: 'woof'
  }
})

var ProjectsCollection = Backbone.Collection.extend({
  model: ProjectModel,

});


var ProjectsView = Backbone.View.extend({
  tagName: 'ul',

  className: 'projects',

  collection: new ProjectsCollection(),

  events: {
    'click .say': 'sayHi'
  },

  sayHi: function() {
    var name = prompt('Project name')
    this.collection.add({name: name})
    this.render()
  },

  initialize: function() {
    this.collection.add(api.getProjects()) //returns array
    $("#root").html(this.el);
    this.render();
  },

  template: _.template(fs.readFileSync(__dirname + '/../templates/projects.html', 'utf8')),

  render: function() {
    this.$el.html(this.template({projects: this.collection.models}));
    return this;
  }
})


exports.list = function () {
  this.view = new ProjectsView();
}
