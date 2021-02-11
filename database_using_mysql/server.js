const express = require("express");
const app = express();

const db = require("./models");
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//Routes folder take apifloder
//use apiRoutes
const apiRoutes = require("./routes/apiRouter");
app.use("/api", apiRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Starting");
  });
});
//==========================================================================
