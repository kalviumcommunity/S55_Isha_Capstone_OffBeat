// userSchema for username and password

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username : String,
    password : String
   
});
const Model = mongoose.model("credentials", userSchema);
module.exports = {Model};

