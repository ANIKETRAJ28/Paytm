const { StatusCodes } = require("http-status-codes");

const UserService = require("../service/user-service");

const userService = new UserService();

const create = async(req, res) => {
    try {
        const response = await userService.create(req.user);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully created the user",
            data: response,
            error: {}
        });
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: "Cannot create the user",
            data: {},
            error: {
                message: error
            }
        });
    }
}

const signin = async(req, res) => {
    try {
        const response = await userService.signin(req.user);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully signin the user",
            data: response,
            error: {}
        });
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            message: "Cannot signin the user",
            data: {},
            error: {
                message: error
            }
        });
    }
}

const update = async(req, res) => {
    try {
        const response = await userService.update(req.id, req.user);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully updated the user",
            data: response,
            error: {}
        });
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            message: "Cannot cannot the user",
            data: {},
            error: {
                message: error
            }
        });
    }
}

const filter = async(req, res) => {
    try {
        const response = await userService.filter(req.id, req.query.filter);
        res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully filtered the user",
            data: response,
            error: {}
        })
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            message: "Cannot filter the user",
            data: {},
            error: {
                message: error
            }
        });
    }
}

module.exports = {
    create,
    signin,
    update,
    filter
}