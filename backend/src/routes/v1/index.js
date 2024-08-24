const express = require("express");

const route = express.Router();

const { validateSignUp, validateSignIn, validateUpdateUser } = require("../../middleware/validateUser");
const { verifyToken } = require("../../middleware/verifyToken");
const { create, signin, update } = require("../../controller/user-controller");

route.post("/signup", validateSignUp, create);
route.post("/signin", validateSignIn, signin);
route.put("/update", verifyToken, validateUpdateUser, update);

module.exports = route;