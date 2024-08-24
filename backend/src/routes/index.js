const express = require("express");

const v1_routes = require("./v1/index");

const route = express.Router();

route.use("/v1", v1_routes);

module.exports = route;