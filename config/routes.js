const express = require("express");
const route = express.Router();
const userController = require("../controller/useController")

route.get('/' ,userController.homePage);

module.exports = route;