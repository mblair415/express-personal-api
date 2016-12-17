// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');
//
// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}
//
// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }
//
//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

var projectList = [{
  title: 'the cure for cancer',
  image: 'https://www.flickr.com/photos/jm/38538',
  dateAssigned: Date.now(),
  teamMembers: 'None, solo project.'
  },
  {
    title: 'a solution for peace in the middle east',
    image: 'http://cdn.shopify.com/s/files/1/0013/7892/files/2983164954_b9e78323d4.jpg?1256788169',
    dateAssigned: Date.now(),
    teamMembers: 'None, solo project.'
  },
  {
    title: 'SF homelessness solution',
    image: 'http://www.agventuresalliance.com/wp-content/uploads/2016/11/Yutong-bus-10m-ZK6107HA-large-buses-price.jpg',
    dateAssigned: Date.now(),
    teamMembers: 'None, solo project'
  }
];


// remove all records that match {} -- which means remove ALL records
db.Project.remove({}, function(err, projects){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all projects');

    // create new records based on the array projectList
    db.Project.create(projectList, function(err, projects){
      if (err) { return console.log('err', err); }
      console.log("created", projects.length, "projects");
      process.exit();
    });
  }
})
