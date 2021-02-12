const express = require("express");
const app = express();
const router = express.Router();

router.post("/pdf", (req, res, next) => {
  res.send("PDF");
});

module.exports = router;
