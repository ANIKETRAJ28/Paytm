const { default: mongoose } = require("mongoose");
const { MONGO_DB_URL } = require("./env");

const connectDB = async() => {
    try {
        await mongoose.connect(MONGO_DB_URL);
        console.log("mongodb connected");
    } catch (error) {
        console.log("can't connect mongodb");
        console.log(error);
    }
}

module.exports = { connectDB };