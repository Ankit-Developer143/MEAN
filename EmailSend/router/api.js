const express = require("express");
const router = express.Router();

router.post("/secondapi", (req, res, next) => {
  res.send("hello This is the api server");
});

module.exports = router;
