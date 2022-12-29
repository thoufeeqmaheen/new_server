const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    Name : String,
    Age : Number,
    Address : String,
    Phone_number : Number
});
module.exports = mongoose.model("User",UserSchema);