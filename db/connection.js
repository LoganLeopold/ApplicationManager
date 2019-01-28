const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Application_Manager");
mongoose.Promise = Promise;
module.exports = mongoose;