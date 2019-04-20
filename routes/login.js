var express = require('express');
var router = express.Router();
var jwt =require('jsonwebtoken');
var model =require('../schema/user');
/* GET users listing. */
router.post('/authenticate', async function(req, res, next) {
    const count = await model.find(req.body).count();
    if(count){
        res.send({token:jwt.sign(req.body,"test1")})
    }
    else{
        res.statusCode(401);
        res.send({message:"Unauthorize"})
    }
});
router.post('/authorize', function(req, res, next) {
    console.log(req.body);
    res.send({token:jwt.verify(req.body.token,"test1")})
});

module.exports = router;
