const express = require("express");
const Route = express.Router();
const menuControll = require("../controller/menuControll");

Route.get("/",menuControll.getHome);
Route.get("/findUs",menuControll.getFindUs)


module.exports = Route;
