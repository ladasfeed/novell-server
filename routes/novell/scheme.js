const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const novellSchema = new Schema(
  {
    characters: Array,
    branches: Array,
    chapters: Schema.Types.Mixed,
  },

  { versionKey: false }
);
const NovellSchema = mongoose.model("Novell", novellSchema);

module.exports = NovellSchema;
