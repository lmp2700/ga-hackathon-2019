const express = require("express");
const router = express.Router();
const controller = require("./models/controllers.js");

router.get("/haves/all", (req, res) => {
  controller.getAllHaves(req, res);
});

router.get("/wants/all", (req, res) => {
  controller.getAllWants(req, res);
});

module.exports = router;
