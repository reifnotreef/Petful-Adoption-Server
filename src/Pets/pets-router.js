const path = require("path");
const express = require("express");
const PetsService = require("./pets-service");
const petsRouter = express.Router();
const jsonParser = express.json();
const xss = require("xss");

petsRouter
  .route("/cats")
  .get((req, res) => {
    let cats = PetsService.getCats();
    res.json(cats);
  })
  .post(jsonParser, (req, res, next) => {
    const { id, name, image, age, sex, breed } = req.body;
    const newCat = {
      id,
      name,
      image,
      age,
      sex,
      breed
    };
    for (const [key, value] of Object.entries(newCat)) {
      if (value === null) {
        return res.status(400).json({
          error: `Missing '${key} in request body`
        });
      }
    }
    PetsService.insertCat(newCat);
    res.send(201);
  })
  .delete((req, res) => {
    let deletedCat = PetsService.deleteCat();
    res.send(204);
  });

petsRouter
  .route("/dogs")
  .get((req, res) => {
    let dogs = PetsService.getDogs();
    res.json(dogs);
  })
  .post(jsonParser, (req, res, next) => {
    const { id, name, image, age, sex, breed } = req.body;
    const newDog = {
      id,
      name,
      image,
      age,
      sex,
      breed
    };
    for (const [key, value] of Object.entries(newDog)) {
      if (value === null) {
        return res.status(400).json({
          error: `Missing '${key} in request body`
        });
      }
    }
    PetsService.insertDog(newDog);
    res.send(201);
  })
  .delete((req, res, next) => {
    PetsService.deleteDog();
    res.send(204);
  });

module.exports = petsRouter;
