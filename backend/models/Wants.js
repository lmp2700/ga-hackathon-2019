//mongoose connection
mongoose.connect("mongodb://localhost/test");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  //we're connected!
});

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Wants Schema
const WantsSchema = new WantsSchema({
  text: []
})

module.exports = Wants = mongoose.model("wants", WantsSchema)