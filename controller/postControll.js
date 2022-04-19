const bot = require("../models/Telegram.js")

module.exports.formCB = function(req,res){
    if(!req.body) res.sendStatus(400);
    
    let arr = Object.entries(req.body)
    arr = arr.map(item => {
        return item.join(": ")
    }).join(`\n`);

    
    


    bot.sendMessage(1531770736,arr)
    res.sendStatus(200)
}