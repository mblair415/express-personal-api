// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var db = require('./models');

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

// var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

// get all projects
app.get('/api/project', function (req, res) {
  // send all projects as JSON response
  res.json({});
});

// get one project.
app.get('/api/project/:id', function (req, res) {
  // send all projects as JSON response
  res.json({});
});

// change one project
app.post('/api/project/:id', function (req, res) {
  // send all projects as JSON response
  res.json({});
});

// delete one project
app.get('/api/project/:id', function (req, res) {
  // send all projects as JSON response
  res.json({});
});


/*
 * HTML Endpoints
 */




/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/example-username/express-personal-api/README.md", // CHANGE ME
    baseUrl: "https://mblair-design.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Profile"},
      {method: "GET", path: "/api/project", description: "Full Project List"},
      {method: "GET", path: "/api/project/:id", description: "One Project"},
      {method: "POST", path: "/api/project", description: "Project Addition"},
      {method: "DELETE", path: "/api/project", description: "Delete Existing Project"},
      {method: "GET", path: "/api/networking", description: "Networking Event"},
      {method: "POST", path: "/api/networking", description: "Networking Event Addition"},
      {method: "DELETE", path: "/api/project", description: "Delete Existing Project"}
    ]
  })
});
app.get('/api/profile', function api_profile(req, res) { // physically moved from below endpoints.
  res.json({
    name: 'Michael Blair',
    currentCity: 'San Rafael',
    githubUsername: 'mblair415',
    githubLink: 'https://github.com/mblair415',
    gitHubProfileImage: 'https://avatars1.githubusercontent.com/u/21349195?v=3&u=8c3f919e94607f8649b7f7e9ea2e5487c5daf97b&s=400',
    pets: [{name: 'Zelda', breed: 'Pittbull mix', age: 2}, {name: 'Megabyte', breed: 'Beagle mix', age: 3}]
  })
});
app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
