const express = require("express");
const app = express();
const port = 8000;
const routes = require("./routes.js");

app.use("/", routes);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

module.exports = app;
