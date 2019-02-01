const mongoose = require("mongoose");

if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MLAB_URL)
  } else {
    mongoose.connect('mongodb://localhost/loganapplicationmanager');
  }
// Code saved so I can run a local nodemon server for development 
// mongoose.connect("mongodb://localhost:27017/Application_Manager", function(error){
//     if(error) console.log(error);

//         console.log("connection successful");
// });


mongoose.Promise = Promise;
module.exports = mongoose;