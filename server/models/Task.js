const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: String,
  body: String,
});

mongoose.model("tasks", taskSchema);
