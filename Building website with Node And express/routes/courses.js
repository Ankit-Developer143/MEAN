const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  var output = `<h1>Welcome To cources </h1>`;
  output += `<a href="/cources/android_tutorial">Android Tutorials</a><br>`;
  output += `<a href="/cources">Cources Tutorials</a><br>`;
  output += `<a href="/cources/express">ExpressJs Tutorials</a><br>`;
  output += `<a href="/cources/mongoDB">MongoDB Tutorials</a><br>`;

  res.send(output);
});

router.get("/android_tutorial", (req, res) => {
  var output = `<h1>Welcome To Android Tutorials </h1>`;
  output += `<a href="/cources">Cources Tutorials</a><br>`;
  output += `<a href="/cources/android_tutorial">Android Tutorials</a><br>`;
  output += `<a href="/cources/express">ExpressJs Tutorials</a><br>`;
  output += `<a href="/cources/mongoDB">MongoDB Tutorials</a><br>`;

  res.send(output);
});
router.get("/express", (req, res) => {
  var output = `<h1>Welcome To Express Tutorials </h1>`;
  output += `<a href="/cources">Cources Tutorials</a><br>`;
  output += `<a href="/cources/android_tutorial">Android Tutorials</a><br>`;
  output += `<a href="/cources/express">ExpressJs Tutorials</a><br>`;
  output += `<a href="/cources/mongoDB">MongoDB Tutorials</a><br>`;

  res.send(output);
});
router.get("/mongoDB", (req, res) => {
  var output = `<h1>Welcome To MongoDB Tutorials </h1>`;
  output += `<a href="/cources">Cources Tutorials</a><br>`;
  output += `<a href="/cources/android_tutorial">Android Tutorials</a><br>`;
  output += `<a href="/cources/express">ExpressJs Tutorials</a><br>`;
  output += `<a href="/cources/mongoDB">MongoDB Tutorials</a><br>`;

  res.send(output);
});
module.exports = router;
