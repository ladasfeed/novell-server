const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const novellSchema = new Schema(
  {
    name: String,
    characters: Array,
    branches: Array,
    chapters: Schema.Types.Mixed,
  },

  { versionKey: false }
);
const NovellSchema = mongoose.model("Novell", novellSchema);

module.exports = NovellSchema;
