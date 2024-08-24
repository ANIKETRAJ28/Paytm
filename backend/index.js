const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { connectDB } = require("./src/config/db");
const { PORT } = require("./src/config/env");
const routes = require("./src/routes/index");

const app = express();

const setupServer = async() => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cors());
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH");
        res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, x-access-token");
        next();
    });

    app.use("/api", routes);

    app.use("/", (req, res) =>  res.json({message: "Welcome"}));

    app.listen(PORT, async() => {
        try {
            console.log("Server running at port", PORT);
            connectDB();
        } catch (error) {
            console.log("failed to setup the server");
            console.log(error);
        }
    });
}

setupServer();