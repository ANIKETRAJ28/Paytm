const express = require("express");
const bodyParser = require("body-parser");

const { connectDB } = require("./src/config/db");
const { PORT } = require("./src/config/env");

const app = express();

const setupServer = async() => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

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