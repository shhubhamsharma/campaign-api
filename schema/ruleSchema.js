let mongoose = require('mongoose')
let ruleSchema = new mongoose.Schema({
    actions: String,
    active: Boolean,
    conditions: String,
    option: Array,
    rulename: String,
    scheduleid: String
})
module.exports = mongoose.model('rules', ruleSchema)