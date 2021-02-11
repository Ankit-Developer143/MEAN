const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "./static")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./static/index.html"));
});

app.get("/myform", func(req, res) {
  var myText = req.query.mytext; //mytext is the name of your input box
  res.send("Your Text:" + myText);
});
app.listen(3000);
