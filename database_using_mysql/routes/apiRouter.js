const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/all", (req, res) => {
  db.Todo.findAll().then((todos) => res.send(todos));
});
//=====================================================================================================CONNECT To SQL

//Create TEXT
router.post("/new", (req, res) => {
  // const { text2 } = req.body;
  // console.log(text2);
  db.Todo.create({
    text: req.body.text,
  }).then((submitedTodo) => res.send(submitedTodo));
});

//GET the value by ID
router.get("/find/:id", (req, res) => {
  db.Todo.findAll({
    where: {
      id: req.params.id,
    },
  }).then((getid) => res.send(getid));
});

//Delete the item by id

router.delete("/delete/:id", (req, res) => {
  db.Todo.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("Success"));
});

//update the item by ID

router.put("/edit/:id", (req, res) => {
  db.Todo.update(
    {
      text: req.body.text,
    },
    {
      where: { id: req.params.id },
    }
  ).then(() => res.send("Succefully"));
});
module.exports = router;
