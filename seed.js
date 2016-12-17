// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');


var projectList = [{
  title: 'the cure for cancer',
  image: 'https://s-media-cache-ak0.pinimg.com/originals/7a/f2/1e/7af21e8e9f4c1f7ce137d9e20b43cef1.jpg',
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

// making one project
// var firstProjectData = projectList[0];
//
// var firstProjectDocument = new db.Project(firstProjectData);
// firstProjectDocument.save(function(err,savedProject) {
//   if (err) {
//     console.log('job save err', err);
//   } else {
//     console.log(savedProject);
//   }
// });

db.Project.remove({}, function(err, someQueryResponse) {
  db.Project.create(projectList, function(err, createdProjects) {
    console.log('created' + createdProjects.length + ' projects')
  });
});

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
