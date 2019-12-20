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
    let insertedCat = PetsService.insertCat(newCat);
    res.status(201).json(insertedCat);
  })
  .delete((req, res) => {
    let deletedCat = PetsService.deleteCat();
    res.status(204).json(deletedCat);
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
    let insertedDog = PetsService.insertDog(newDog);
    res.status(201).json(insertedDog);
  })
  .delete((req, res, next) => {
    let deletedDog = PetsService.deleteDog();
    res.status(204).json(deletedDog);
  });

module.exports = petsRouter;
