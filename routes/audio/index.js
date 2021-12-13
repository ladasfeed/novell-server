const express = require("express");
const router = express.Router();
const AudioScheme = require("./scheme");

router.post("/", async (req, res) => {
  const { value, name } = req.body;
  const image = await AudioScheme.create({
    value,
    name,
  });
  res.status(201).json({
    id: image.id,
  });
});

router.get("/", async (req, res) => {
  const image = await AudioScheme.find();
  res.status(200).json(image);
});

router.delete("/", async (req, res) => {
  await AudioScheme.deleteMany();
  res.status(201).send();
});

module.exports = router;
