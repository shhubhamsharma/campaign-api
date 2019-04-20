let mongoose = require('mongoose')
let campaignSchema = new mongoose.Schema({
   name:String,
   id:Number
},{collection:"campaigns"});
module.exports = mongoose.model('campaigns', campaignSchema)