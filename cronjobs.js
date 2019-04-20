var Rules = require('./schema/ruleSchema')

module.exports.executor15 =function (){
    Rules.find({scheduleid:"1"}).then(async res => {
        console.log("notify user 1");
        await res.forEach(async element => {
            
        });
    }).catch(err =>{

    });
}
module.exports.executorhourly =function (){
    Rules.find({scheduleid:"2"}).then(res => {
        console.log("notify user 20");
    }).catch(err =>{

    });
}
module.exports.executordaily =function (){
    Rules.find({scheduleid:"3"}).then(res => {
        console.log("notify user");
    }).catch(err =>{

    });
}
