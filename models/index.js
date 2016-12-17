// models/index.js

// require mongoose
var mongoose = require("mongoose");

// connect to database
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");

// export models for use in server
module.exports.Project = require("./project.js");




// bring in models
