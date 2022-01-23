const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageScheme = new Schema(
  {
    path: String,
    type: {
      type: String,
      enum: ["character", "background"],
    },
    novell_id: String,
  },
  { versionKey: false }
);
const ImageScheme = mongoose.model("Images", imageScheme);

module.exports = ImageScheme;
