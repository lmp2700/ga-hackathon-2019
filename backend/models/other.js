//mongoose connection
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  //we're connected!
});
const kittySchema = new mongoose.Schema({
  name: String
});
const kitten = mongoose.model("Kitten", kittySchema);
const silence = new kitten({ name: "Silence" });
console.log(silence.name);
kittySchema.methods.speak = function() {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
};
const Kitten = mongoose.model("Kitten", kittySchema);
const fluffy = new Kitten({ name: "Fluffy" });
//fluffy.speak();
fluffy.save((err, fluffy) => {
  if (err) return console.error(err);
  // fluffy.speak();
});
Kitten.find((err, kittens) => {
  if (err) return console.error(err);
  console.log(kittens);
});
//Kitten.find({ name: /^fluff/ }, callback);
