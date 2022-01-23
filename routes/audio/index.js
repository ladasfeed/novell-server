const express = require("express");
const router = express.Router();
const AudioScheme = require("./scheme");
const fs = require("fs");

router.post("/:id", async (req, res) => {
  const { value } = req.body;
  const { id } = req.params;
  const audio = await AudioScheme.create({
    novell_id: id,
  });

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

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const audio = await AudioScheme.find().where("novell_id").equals(id);

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
