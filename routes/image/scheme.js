const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageScheme = new Schema(
  { value: String, name: String },
  { versionKey: false }
);
const ImageScheme = mongoose.model("User", imageScheme);

module.exports = ImageScheme;
