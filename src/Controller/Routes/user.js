const express = require("express");
const validator = require("validator");
const { register, login, getUserById } = require("../UserController");
const { middleId, middleEmail } = require("../../Middleware/middleware");

const user = express.Router();

user.post("/register", middleEmail, register);
user.post("/login", middleEmail, login);
user.get("/:id", middleId, getUserById);
module.exports = user;
