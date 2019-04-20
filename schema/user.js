let mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
    email: String,
    password: String
},{collection: "users"});
module.exports = mongoose.model('users', userSchema)