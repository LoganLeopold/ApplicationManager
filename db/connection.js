const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Application_Manager", function(error){
    if(error) console.log(error);

        console.log("connection successful");
});



mongoose.Promise = Promise;
module.exports = mongoose;