const express = require("express");
const app = express();

//Default path
const courses = require("../routes/courses");
app.use("/cources", courses);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
