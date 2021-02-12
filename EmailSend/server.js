const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const api = require("./router/api");
app.use("/firstapi", api);

//html path
app.use(express.static(path.join(__dirname, "html")));

app.get("/", (req, res) => {
  res.send("index.html");
});

app.listen(3000);
