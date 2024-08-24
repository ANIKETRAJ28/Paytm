const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: [6, "Password is too short"],
        max: [10, "Password is too long"]
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;