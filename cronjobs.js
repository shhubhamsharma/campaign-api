var Rules = require('./schema/ruleSchema');
var cpmData = require('./schema/userInfo');

module.exports.executor15 = function () {
    Rules.find({ scheduleid: "1" }).then(async res => {
        console.log("notify user 1");
        await res.forEach(async element => {
            cpmData.aggregate([{
                $match: {
                    campaign: { $in: element.option }
                }
            }, {
                $group: {
                    _id: "$campaign",
                    cost: { $sum: "$value" }
                }
            }]).then(res => {
                if (eval(element.condition)) {
                    console.log("notify")
                }
            })
        });
    }).catch(err => {
        console.log("handle error");
    });
}
module.exports.executorhourly = function () {
    Rules.find({ scheduleid: "2" }).then(res => {
        await res.forEach(async element => {
            cpmData.aggregate([{
                $match: {
                    campaign: { $in: element.option }
                }
            }, {
                $group: {
                    _id: "$campaign",
                    cost: { $sum: "$value" }
                }
            }]).then(res => {
                if (eval(element.condition)) {
                    console.log("notify")
                }
            })
        });
    }).catch(err => {

    });
}
module.exports.executordaily = function () {
    Rules.find({ scheduleid: "3" }).then(res => {
        await res.forEach(async element => {
            cpmData.aggregate([{
                $match: {
                    campaign: { $in: element.option }
                }
            }, {
                $group: {
                    _id: "$campaign",
                    cost: { $sum: "$value" }
                }
            }]).then(res => {
                if (eval(element.condition)) {
                    console.log("notify")
                }
            })
        });
    }).catch(err => {

    });
}
