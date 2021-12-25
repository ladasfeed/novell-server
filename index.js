const express = require("express");
const app = express();
const port = 4000;
const mongoose = require("mongoose");
const cors = require("cors");
const ImageService = require("./routes/image");
const AudioService = require("./routes/audio");
const bodyParser = require("body-parser");

mongoose.connect(
  "mongodb+srv://donbass:Megumen322@cluster0.01rjx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {},
  function (err) {
    console.log("db");
    if (err) return console.log(err);
  }
);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(express.static("public"));

app.use("/image", ImageService);
app.use("/audio", AudioService);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
