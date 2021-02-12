const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const port = 3000;

//router Import
//path
app.use(express.static(path.join(__dirname, "public"))); //html

const pdfRoute = require("./routes/pdfmake");
app.use("/pdfmake", pdfRoute);

app.get("/", (req, res) => {
  res.send("index.html");
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
