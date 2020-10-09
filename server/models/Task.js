const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  id: Number,
  title: String,
  body: String,
  requirements: String,
});

mongoose.model("tasks", taskSchema);
