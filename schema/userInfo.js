let mongoose = require('mongoose')
let userInfoSchema = new mongoose.Schema({
   campaign:String,
   metrics:String,
   value: Number,
   Datetime: Date
},{collection:"userInfo"});
module.exports = mongoose.model('userInfo', userInfoSchema)