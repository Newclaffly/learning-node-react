const router = require("express").Router();
let Excercies = require("../models/exercies.model");

router.route("/").get((req, res) => {
  Excercies.find()
    .then((excercise) => res.json(excercise))
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

router.route("/:id").get((req, res) => {
  Excercies.findById(req.params.id)
    .then((excercise) => res.json(excercise))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").delete((req, res) => {
  Excercies.findByIdAndDelete(req.params.id)
    .then(() => res.json("Excercies deleted"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/update/:id").post((req, res) => {
  Excercies.findById(req.params.id)
    .then((excercise) => {
      excercise.username = req.body.username;
      excercise.description = req.body.description;
      excercise.duration = Number(req.body.duration);
      excercise.date = Date.parse(req.body.date);
      excercise
        .save()
        .then(() => res.json("Excerise update"))
        .catch((err) => res.status(400).json("Error:" + err));
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
