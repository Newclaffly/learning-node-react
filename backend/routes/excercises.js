const router = require("express").Router();
let Excercies = require("../models/exercies.model");

router.route("/").get((req, res) => {
  Excercies.find()
    .then((excercises) => res.json(excercises))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExcerise = new Excercies({
    username,
    description,
    duration,
    date,
  });

  newExcerise
    .save()
    .then(() => res.json("Excerise add"))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
