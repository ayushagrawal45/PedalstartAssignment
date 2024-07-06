const ToDoModel = require("../models/ToDoModel");

// Get all to-dos
module.exports.getToDos = async (req, res) => {
  try {
    const toDos = await ToDoModel.find();
    res.status(200).send(toDos);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};

// Save a new to-do
module.exports.saveToDo = (req, res) => {
  const { toDo, description, time } = req.body;

  ToDoModel.create({ toDo, description, time })
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err, msg: "Something went wrong!" });
    });
};

// Update an existing to-do
module.exports.updateToDo = (req, res) => {
  const { id } = req.params;
  const { toDo, description, time } = req.body;

  ToDoModel.findByIdAndUpdate(id, { toDo, description, time }, { new: true })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err, msg: "Something went wrong!" });
    });
};

// Delete a to-do
module.exports.deleteToDo = (req, res) => {
  const { id } = req.params;

  ToDoModel.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send("Deleted Successfully....");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err, msg: "Something went wrong!" });
    });
};
