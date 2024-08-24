const User = require("../model/user");

class UserRepository {

    async create(user) {
        try {
            const check_user = await User.findOne({username: user.username});
            if(check_user?._id) {
                throw("User already exists");
            }
            await User.create(user);
        } catch (error) {
            console.log("error in repository");
            throw(error);
        }
    }
}

module.exports = UserRepository;