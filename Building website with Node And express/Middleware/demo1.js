const express = require("express");

const app = express();
app.listen(3000);
app.use(Middleware);

app.get("/", (req, res, next) => {
  console.log("This is Function #1");
  res.send("<h1> Hello World </h1> ");
  next();
});
app.get("/feedback", (req, res, next) => {
  res.send("feedback");
  console.log("This is feedback Page");
  next();
});

function Middleware(req, res, next) {
  console.log("This is Function #2");
  next();
}

// This is Function #2
// This is Function #1
//on browser : Hello World
