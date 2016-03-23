var Backbone = require('backbone');
var db = require('./db.json');

exports.getProjects = function () {
  return db.projects
}

exports.addProject = function (name) {
  db.projects.push({name: name})
  Backbone.sync()
}
