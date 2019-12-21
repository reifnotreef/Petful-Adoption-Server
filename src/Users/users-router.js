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
    // console.log(req);
    const { name } = req.body;
    const newUser = { name };
    console.log(newUser);
    UsersService.insertUser(newUser);
    // for (const [key, value] of Object.entries(newUser)) {
    //   if (value === null) {
    //     return res.status(400).json({
    //       error: `Missing '${key} in request body`
    //     });
    //   }
    // }
    console.log(UsersService.getUsers());
    res.status(201).send(UsersService.getUsers());
  })
  .delete((req, res) => {
    UsersService.deleteUser();
    res.send(204);
  });

module.exports = usersRouter;
