const jwt = require("jsonwebtoken");

const User = require("../model/user");
const { JWT_SECRET } = require("../config/env");

class UserRepository {

    async create(user) {
        try {
            const check_user = await User.findOne({username: user.username});
            if(check_user?._id) {
                throw("User already exists");
            }
            const newUser = await User.create(user);
            const id = newUser._id;
            const token = jwt.sign({
                id
            }, JWT_SECRET);
            return token;
        } catch (error) {
            console.log("error in repository");
            throw(error);
        }
    }

    async signin(user) {
        try {
            const check_user = await User.findOne({username: user.username});
            if(!check_user) {
                throw("User does not exists");
            }
            if(check_user.password != user.password) {
                throw("Incorrect password");
            }
            const id = check_user._id;
            const token = jwt.sign({
                id
            }, JWT_SECRET);
            return token;
        } catch (error) {
            console.log("error in repository");
            throw(error);
        }
    }
}

module.exports = UserRepository;