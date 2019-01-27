const express = require("express");
const router = express.Router();
const controller = require("./models/controllers.js");

router.get("/haves/:userId", req => {
  controller.getAllHaves(req);
});

router.get("/wants/:userId", req => {
  controller.getAllWants(req);
});

module.exports = router;
