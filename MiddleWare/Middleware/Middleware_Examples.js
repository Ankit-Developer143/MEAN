const express = require("express");

const app = express();

//using middleware
// app.use(logger);

app.get("/", (req, res, next) => {
  console.log("Home");
  res.send("Home Page");
  next();
});
app.get("/users", (req, res) => {
  console.log("Page");
  res.send("User Page");
});
// function logger(req, res) {
//   console.log("Hello");
// }
app.listen(3000);
