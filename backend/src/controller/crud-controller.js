const UserService = require("../service/user-service");

const userService = new UserService();

const create = async(req, res) => {
    try {
        const response = await userService.create(req.user);
        return res.status(201).json({
            success: true,
            message: "Successfully created the user",
            data: response,
            error: {}
        });
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Cannot create the user",
            data: {},
            error: error
        });
    }
}

module.exports = {
    create
}