const mongoose = require("mongoose");

// ("mongodb://loganleopold:Stick2it!@ds219055.mlab.com:19055/application_manager",

if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MLAB_URL)
  } else {
    mongoose.connect('mongodb://localhost/loganapplicationmanager');
  }
// s


mongoose.Promise = Promise;
module.exports = mongoose;