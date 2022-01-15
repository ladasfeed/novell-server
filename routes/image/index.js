const express = require("express");
const router = express.Router();
const ImageScheme = require("./scheme");
const AudioScheme = require("./scheme");
const fs = require("fs");

router.post("/", async (req, res) => {
  const { value, name } = req.body;
  const image = await ImageScheme.create({});

  const buffer = Buffer.from(value.split("base64,")[1], "base64");
  const path = `/imageStorage/${image._id}.png`;
  fs.writeFileSync("./public" + path, buffer);

  await image.update({
    path,
  });

  res.status(201).json({
    id: image.id,
    path,
  });
});

router.get("/", async (req, res) => {
  const image = await ImageScheme.find();
  console.log(image);
  res.status(200).json(image);
});

router.delete("/", async (req, res) => {
  await ImageScheme.deleteMany();
  res.status(201).send();
});

module.exports = router;
