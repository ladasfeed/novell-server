const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const audioScheme = new Schema({ path: String }, { versionKey: false });
const AudioScheme = mongoose.model("Audio", audioScheme);

module.exports = AudioScheme;
