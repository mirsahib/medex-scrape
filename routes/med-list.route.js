const express = require("express");
const router = express.Router();
const medListCtrl = require("../controller/med-list.controller.js");

router.route("/").get(medListCtrl.medList); // default route to get user id

module.exports = router;
