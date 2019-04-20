'use strict'
var db= require('../db');
var users=require("../schema/user");
var campaign =require("../schema/campaign");
var userInfo =require("../schema/userInfo");

module.exports.up = async function (next) {
    db._connect();
    await users.insertMany({email:"test@test.test", password: 1234567});
    await campaign.insertMany([{name:"Swiggy",id:1},{name:"Netflix",id:2},{name:"Zomato",id:3},
    {name:"Prime",id:4},{name:"Demo",id:5}]);
    await userInfo.insertMany([{
      campaign:"Swiggy",
      metrics:"Impressions",
      value: 1,
      Datetime: new Date()
   },
   {
    campaign:"Netflix",
    metrics:"Click",
    value: 2,
    Datetime: new Date()
 }])
    console.log("inside migrations")
    next()
}


module.exports.down = async function (next) {
      await users.remove();
      console.log("inside down migrations");
  next()
}