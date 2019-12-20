const path = require("path");
const express = require("express");
const UsersService = require("./users-service");
const usersRouter = express.Router();
const jsonParser = express.json();
const xss = require("xss");

usersRouter
  .route("/")
  .get((req, res) => {
    let users = UsersService.getUsers();
    res.json(users);
  })
  .post(jsonParser, (req, res) => {
    const { name } = req.body;
    const newUser = { name };
    for (const [key, value] of Object.entries(newUser)) {
      if (value === null) {
        return res.status(400).json({
          error: `Missing '${key} in request body`
        });
      }
    }
    let insertedUser = UsersService.insertUsers(newUser);
    res.status(201).json(insertedUser);
  })
  .delete((req, res) => {
    let deletedUser = UsersService.deleteUser();
    res.status(204);
  });

module.exports = usersRouter;
