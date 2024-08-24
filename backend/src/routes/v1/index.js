const express = require("express");

const route = express.Router();

const { validateUser, validateSignin } = require("../../middleware/validateUser");
const { create, signin } = require("../../controller/user-controller");

route.post("/signup", validateUser, create);
route.post("/signin", validateSignin, signin);

module.exports = route;