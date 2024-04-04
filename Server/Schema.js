const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    location: String,
    name: String,
    child_safe: Boolean,
    rating: Number,
   
});
const userModel = mongoose.model("offbeat-collections", userSchema);
module.exports = {userModel};