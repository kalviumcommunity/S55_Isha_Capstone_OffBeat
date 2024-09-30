const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: String,
    password:String
});
const Model = mongoose.model("credentials", userSchema);
console.log(Model)
module.exports = {Model};