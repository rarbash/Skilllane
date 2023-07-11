const { Router } = require("express");
const router = Router();
const usersController = require("../controllers/Users.controller");

const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.get("/", async (req, res) => {
  try {
    const users = await usersController.findAll();
    res.status(200).json({ users: users });
  } catch (err) {
    res.status(404).json({ message: "Not Found" });
  }
});

router.get("/:username", async (req, res) => {
  try {
    const username = req.params.username;
    if (username) {
      const user = await usersController.findOneUserProfile(username);
      res.status(200).json({ user: user });
    } else {
      const error = new Error();
      error.code = 400;
    }
  } catch (err) {
    err.code = 400 && res.status(400).json({ errorMessage: "Bad Request" });
  }
});

router.post("/", async (req, res) => {
  try {
    let encryptPassword = await bcrypt.hash(req.body.password, saltRounds);

    const username = req.body.username;
    const password = encryptPassword;

    if (usersController.findOneUser(username)) {
      const user = await usersController.create(username, password);
      res.status(200).json({ message: "User created." });
    } else {
      const error = new Error();
      error.code = "409";
      throw error;
    }
  } catch (err) {
    if (err.code == 409) {
      res.status(409).json({
        errorMessage: "This username already exsit",
      });
    } else {
      res.sendStatus(400);
    }
  }
});

router.post("/login", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const user = await usersController.findOneUserProfile(username);
    let token;

    if (user && (await bcrypt.compare(password, user.password))) {
      token = jwt.sign(
        { username: username, profile: user.Profile },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
    }
    if (token) {
      console.log("hiii");
      res.status(200).json({ userToken: token, username: user.username });
    } else {
      const error = new Error();
      error.code = "401";
      throw error;
    }
  } catch (err) {
    if (err.code == 401) {
      res.status(401).json({ message: "Wrong username or password." });
    } else {
      res.sendStatus(400);
    }
  }
});

module.exports = router;
