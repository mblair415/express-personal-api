var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProjectSchema = new Schema({
     title: String,
     image: String,
     dateAssigned: String,
     teamMembers: {
       type: String,
       default: 'Solo project'
     },
     githubLink: String,
     hostedSiteLink: {
       type: String,
       default: 'Not hosted'
     },
     updated: {
       type: Date,
       default: Date.now
     }
});


var Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;
