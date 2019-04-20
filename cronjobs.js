var Rules = require('./schema/ruleSchema');
var cpmData = require('./schema/userInfo');

module.exports.executor15 = function () {
    Rules.find({ scheduleid: "1" }).then(async res => {
        console.log("notify user 1", res.toString());
        await res.forEach(async element => {
            cpmData.aggregate([{
                $match: {
                    campaign: { $in: element.option }
                }
            }, {
                $group: {
                    _id: {
                        "campaign": "$campaign",
                        "metrics": "$metrics"
                    },
                    cost: { $sum: "$value" }
                }
            }]).then(async res => {
                console.log(res);
                // let cpm =res.
                await res.forEach(async element1=>{
                   let cpm = element1.cost;
                   if (eval(element.conditions)) {
                    console.log("notify")
                    }
                });
                console.log(element.conditions)
                
            })
        });
    }).catch(err => {
        console.log("handle error");
    });
}
module.exports.executorhourly = function () {
    Rules.find({ scheduleid: "2" }).then(async res => {
        console.log("notify user 4", res.toString());
        await res.forEach(async element => {
            cpmData.aggregate([{
                $match: {
                    campaign: { $in: element.option }
                }
            }, {
                $group: {
                    _id: {
                        "campaign": "$campaign",
                        "metrics": "$metrics"
                    },
                    cost: { $sum: "$value" }
                }
            }]).then(async res => {
                console.log(res);
                // let cpm =res.
                await res.forEach(async element1=>{
                   let cpm = element1.cost;
                   if (eval(element.conditions)) {
                    console.log("notify")
                    }
                });
                console.log(element.conditions)
                
            })
        });
    })}
module.exports.executordaily = function () {
    Rules.find({ scheduleid: "3" }).then(async res => {
        console.log("notify user 2", res.toString());
        await res.forEach(async element => {
            cpmData.aggregate([{
                $match: {
                    campaign: { $in: element.option }
                }
            }, {
                $group: {
                    _id: {
                        "campaign": "$campaign",
                        "metrics": "$metrics"
                    },
                    cost: { $sum: "$value" }
                }
            }]).then(async res => {
                console.log(res);
                // let cpm =res.
                await res.forEach(async element1=>{
                   let cpm = element1.cost;
                   if (eval(element.conditions)) {
                    console.log("notify")
                    }
                });
                console.log(element.conditions)
                
            })
        });
    })}
