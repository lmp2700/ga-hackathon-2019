const express = require("express");
const router = express.Router();
const controller = require("./models/controllers.js");

router.get("/haves/:userId", (req, res) => {
  controller.getAllHaves(req, res);
});

router.get("/wants/:userId", (req, res) => {
  controller.getAllWants(req, res);
});

module.exports = router;
