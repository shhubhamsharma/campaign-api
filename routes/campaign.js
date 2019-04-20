var express = require('express');
var router = express.Router();
var Rules = require('../schema/ruleSchema');
var Campaigns =require('../schema/campaign');

router.get('/allRules', async function (req, res, next) {
     const data = await Rules.find();
    res.send({data} );
});
router.post('/submitRules', function (req, res, next) {
     let model =  new Rules(req.body);
     model.save().then(doc => {
        console.log(doc)
      })
      .catch(err => {
        console.error(err)
      });
    res.send({message:"Done"});
});
router.get('/allCampaigns', async function (req, res, next) {
    const data = await Campaigns.find();
   res.send({data} );
});
module.exports = router;
