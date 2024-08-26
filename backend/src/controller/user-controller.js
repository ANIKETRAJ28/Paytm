const { StatusCodes } = require("http-status-codes");

const UserService = require("../service/user-service");

const userService = new UserService();

const create = async(req, res) => {
    try {
        const response = await userService.create(req.user);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            data: response,
            error: {}
        });
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            data: {},
            error: error
        });
    }
}

const signin = async(req, res) => {
    try {
        const response = await userService.signin(req.user);
        return res.status(StatusCodes.OK).json({
            success: true,
            data: response,
            error: {}
        });
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            data: {},
            error: error
        });
    }
}

const update = async(req, res) => {
    try {
        const response = await userService.update(req.id, req.user);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            data: response,
            error: {}
        });
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            data: {},
            error: error
        });
    }
}

const filter = async(req, res) => {
    try {
        const response = await userService.filter(req.id, req.query.filter);
        res.status(StatusCodes.OK).json({
            success: true,
            data: response,
            error: {}
        })
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            data: {},
            error: error
        });
    }
}

module.exports = {
    create,
    signin,
    update,
    filter
}