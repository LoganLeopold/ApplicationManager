const mongoose = require("mongoose");

mongoose.connect("mongodb://loganleopold:Stick2it!@ds219055.mlab.com:19055/application_manager", function(error){
    if(error) {console.log(error);}
    else {

        console.log("connection successful");}
});



mongoose.Promise = Promise;
module.exports = mongoose;