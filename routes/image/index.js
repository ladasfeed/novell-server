const express = require("express");
const router = express.Router();
const ImageScheme = require("./scheme");
const AudioScheme = require("./scheme");
const fs = require("fs");

router.post("/", async (req, res) => {
  const { value, name, type } = req.body;
  const image = await ImageScheme.create({
    type,
  });

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
  /** @type background | character */
  const { type } = req.query;
  const image = await ImageScheme.find().where("type").equals(type);
  res.status(200).json(image);
});

router.delete("/", async (req, res) => {
  await ImageScheme.deleteMany();
  res.status(201).send();
});

module.exports = router;
