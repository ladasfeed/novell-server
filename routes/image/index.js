const express = require("express");
const router = express.Router();
const ImageScheme = require("./scheme");

router.post("/", async (req, res) => {
  const { value, name } = req.body;
  const image = await ImageScheme.create({
    value,
    name,
  });
  res.status(201).json({
    id: image.id,
  });
});

router.get("/", async (req, res) => {
  const image = await ImageScheme.find();
  res.status(200).json(image);
});

module.exports = router;
