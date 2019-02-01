const mongoose = require("mongoose");

// ("mongodb://loganleopold:Stick2it!@ds219055.mlab.com:19055/application_manager",

if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MLAB_URL)
  } else {
    mongoose.connect('mongodb://localhost/loganapplicationmanager');
  }

// mongoose.connect("mongodb://localhost:27017/Application_Manager", function(error){
//     if(error) console.log(error);

//         console.log("connection successful");
// });


mongoose.Promise = Promise;
module.exports = mongoose;