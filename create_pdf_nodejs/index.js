const pdf = require("pdf-creator-node");
var fs = require("fs");
const express = require("express");
const app = express();

var html = fs.readFileSync("index.html", "utf-8");

//For Styling

var options = {
  format: "A3",
  orientation: "portrait",
  border: "10mm",
  header: {
    height: "45mm",
    contents: '<div style="text-align: center;">Author: Shyam Hajare</div>',
  },
  footer: {
    height: "28mm",
    contents: {
      first: "Cover page",
      default:
        '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
      last: "Last Page",
    },
  },
};

//data

var users = [
  {
    name: "Shyam",
    age: "26",
  },
  {
    name: "Navjot",
    age: "26",
  },
  {
    name: "Vitthal",
    age: "26",
  },
];

//Save Data
var document = {
  html: html,
  data: {
    users: users,
  },
  path: "./output.pdf",
};

pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
