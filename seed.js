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

var projects = [{
  title: 'the cure for cancer',
  screenshot: 'https://www.flickr.com/photos/jm/38538',
  dateAssigned: Date.now(),
  teamMembers: 'None, solo project.'
  },
  {
    title: 'a solution for peace in the middle east',
    screenshot: 'http://cdn.shopify.com/s/files/1/0013/7892/files/2983164954_b9e78323d4.jpg?1256788169',
    dateAssigned: Date.now(),
    teamMembers: 'None, solo project.'
  },
  {
    title: 'SF homelessness solution',
    screenshot: 'http://www.agventuresalliance.com/wp-content/uploads/2016/11/Yutong-bus-10m-ZK6107HA-large-buses-price.jpg',
    dateAssigned: Date.now(),
    teamMembers: 'None, solo project'
  }
];


// db.Author.remove({}, function(err, authors) {
//   console.log('removed all authors');
//   db.Author.create(authors_list, function(err, authors){
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log('recreated all authors');
//     console.log("created", authors.length, "authors");
//
//
//     db.Book.remove({}, function(err, books){
//       console.log('removed all books');
//       books_list.forEach(function (bookData) {
//         var book = new db.Book({
//           title: bookData.title,
//           image: bookData.image,
//           releaseDate: bookData.releaseDate
//         });
//         db.Author.findOne({name: bookData.author}, function (err, foundAuthor) {
//           console.log('found author ' + foundAuthor.name + ' for book ' + book.title);
//           if (err) {
//             console.log(err);
//             return;
//           }
//           book.author = foundAuthor;
//           book.save(function(err, savedBook){
//             if (err) {
//               return console.log(err);
//             }
//             console.log('saved ' + savedBook.title + ' by ' + foundAuthor.name);
//           });
//         });
//       });
//     });
//
//   });
// });
