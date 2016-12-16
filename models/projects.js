var mongoose = require('mongoose'),
  // Schema = mongoose.Schema;
  // Author = require('./author');

// models/book.js
var ProjectSchema = new Schema({
     title: String,
     screenShot: String,
     dateAssigned: String,
     teamMembers: String
});


var Project = mongoose.model('Project', ProjetSchema);
module.exports = Project;
