const express = require("express");
const router = express.Router();
const AudioScheme = require("./scheme");
const fs = require("fs");

router.post("/", async (req, res) => {
  const { value } = req.body;
  const audio = await AudioScheme.create({});

  const buffer = Buffer.from(value.split("base64,")[1], "base64");
  const path = `/audioStorage/${audio._id}.wav`;
  fs.writeFileSync("./public" + path, buffer);

  await audio.update({
    path,
  });

  res.status(201).json({
    path,
    audio: audio._id,
  });
});

router.get("/", async (req, res) => {
  const audio = await AudioScheme.find();
  res.status(200).json(
    audio.map((item) => ({
      path: item.path,
      id: item._id,
    }))
  );
});

router.delete("/", async (req, res) => {
  await AudioScheme.deleteMany();
  res.status(201).send();
});

module.exports = router;
