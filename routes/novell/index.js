const express = require("express");
const router = express.Router();
const NovellSchema = require("./scheme");

router.post("/", async (req, res) => {
  const { chapters, characters, branches } = req.body;
  console.log(123);
  const novell = await NovellSchema.create({
    chapters,
    characters,
    branches,
  });

  res.status(201).json({
    id: novell._id,
  });
});

router.get("/", async (req, res) => {
  const novell = await NovellSchema.find();
  res.status(200).json(novell);
});

router.put("/:id", async (req, res) => {
  const { chapters, characters, branches } = req.body;
  const { id } = req.params;
  const novell = await NovellSchema.findByIdAndUpdate(id, {
    chapters,
    characters,
    branches,
  });
  res.status(200).json(novell);
});

router.delete("/all", async (req, res) => {
  await NovellSchema.deleteMany();
  res.status(200).send();
});

module.exports = router;
