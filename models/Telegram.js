const telegram = require("node-telegram-bot-api");

const BOT_TOKEN = "5135370124:AAFJ80Yp69OPV60pTB5jno9X02174UP0hvY";

const bot = new telegram(BOT_TOKEN,{polling:true})

bot.on("polling_error",()=>{})

module.exports = bot;