const express = require("express");
const router = express.Router();
const postControll = require("../controller/postControll.js")

router.post("/formCB",postControll.formCB);

module.exports = router;