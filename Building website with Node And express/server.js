const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

//Using Static Files
app.use(express.static(path.join(__dirname, "./static")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./static/index.html"));
// });

//print Hello World

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("This is about Pages");
});

//Using Id

app.get("/about/:id", (req, res) => {
  const id = req.params.id;
  res.send("Hey Ankit" + id);
});

app.listen(port, () => console.log("listening port" + port));
