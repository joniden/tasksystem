const mongoose = require("mongoose");
const Task = mongoose.model("tasks");

module.exports = (app) => {
  app.get(`/api/task`, async (req, res) => {
    let tasks = await Task.find();
    return res.status(200).send(tasks);
  });

  app.post(`/api/task`, async (req, res) => {
    let task = await Task.create(req.body);
    return res.status(201).send({
      error: false,
      task,
    });
  });

  app.put(`/api/task/:id`, async (req, res) => {
    const { id } = req.params;

    let task = await Task.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      task,
    });
  });

  app.delete(`/api/task/`, async (req, res) => {
    let task = await Task.deleteMany();

    return res.status(202).send({
      error: false,
    });
  });

  app.delete(`/api/task/:id`, async (req, res) => {
    const { id } = req.params;

    let task = await Task.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      task,
    });
  });
};
