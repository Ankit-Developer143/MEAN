const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "---" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

//for html

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

//single file
app.post("/single", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("Single File upload sucess");
});

//multiple file

app.post("/multiple", upload.array("images", 2), (req, res) => {
  console.log(req.files);
  res.send("Multiple file uploaded");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Starting");
});
