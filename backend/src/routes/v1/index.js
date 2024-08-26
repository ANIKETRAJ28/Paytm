const express = require("express");

const route = express.Router();

const { validateSignUp, validateSignIn, validateUpdateUser, validateFilterUser } = require("../../middleware/validateUser");
const { verifyToken } = require("../../middleware/verifyToken");
const { create, signin, update, filter } = require("../../controller/user-controller");
const { addAccount, addBalance, sendBalance } = require("../../controller/account-controller");

route.post("/user/signup", validateSignUp, create);
route.post("/user/signin", validateSignIn, signin);
route.put("/user/update", verifyToken, validateUpdateUser, update);
route.post("/user/bulk", verifyToken, validateFilterUser, filter);

route.post("/user/account/create", verifyToken, addAccount);
route.post("/user/account/credit", verifyToken, addBalance);
route.post("/user/account/send", verifyToken, sendBalance);

module.exports = route;