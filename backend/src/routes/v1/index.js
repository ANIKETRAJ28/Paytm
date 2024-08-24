const express = require("express");

const route = express.Router();

const { validateUser } = require("../../middleware/validateUser");
const { create } = require("../../controller/crud-controller");

route.post("/create", validateUser, create);

module.exports = route;