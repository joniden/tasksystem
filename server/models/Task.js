const mongoose = require("mongoose");
const { Schema } = mongoose;
const category = require("./models/Category");

const taskSchema = new Schema({
  id: Number,
  title: String,
  body: String,
  requirements: String,
  categories: [category],
});

mongoose.model("tasks", taskSchema);
