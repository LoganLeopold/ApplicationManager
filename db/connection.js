const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Application_Manager");
mongoose.Promise = Promise;
module.exports = mongoose;