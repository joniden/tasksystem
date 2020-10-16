const mongoose = require("mongoose");
const Task = mongoose.model("tasks");
const Category = mongoose.model("categories");

const taskPath = "/api/task";
const categoryPath = "/api/category";

module.exports = (app) => {
  app.get(taskPath, async (req, res) => {
    let tasks = await Task.find();
    return res.status(200).send(tasks);
  });

  app.get(`${taskPath}/:id`, async (req, res) => {
    const { id } = req.params;
    try {
      let task = await Task.findById(id);
      return res.status(200).send(task);
    } catch (error) {
      return res.status(404).send({ error: true });
    }
  });

  app.post(taskPath, async (req, res) => {
    let task = await Task.create(req.body);
    return res.status(201).send({
      error: false,
      task,
    });
  });

  app.put(`${taskPath}/:id`, async (req, res) => {
    const { id } = req.params;

    let task = await Task.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      task,
    });
  });

  app.delete(taskPath, async (req, res) => {
    let task = await Task.deleteMany();

    return res.status(202).send({
      error: false,
    });
  });

  app.delete(`${taskPath}/:id`, async (req, res) => {
    const { id } = req.params;

    let task = await Task.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      task,
    });
  });

  app.get(categoryPath, async (req, res) => {
    try {
      let categories = await Category.find();
      return res.status(200).send(categories);
    } catch (error) {
      return res.status(404).send({ error: true });
    }
  });

  app.post(categoryPath, async (req, res) => {
    let category = await Category.create(req.body);
    return res.status(201).send({
      error: false,
      category,
    });
  });

  app.delete(`${categoryPath}/:id`, async (req, res) => {
    const { id } = req.params;

    let category = await Category.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      category,
    });
  });
};
