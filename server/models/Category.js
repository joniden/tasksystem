const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  id: Number,
  name: String,
});

mongoose.model("categories", schema);
