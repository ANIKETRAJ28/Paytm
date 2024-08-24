const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const { JWT_SECRET } = require("../config/env");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: "Token not found",
            data: {},
            error: {
                message: "Bearer Token missing"
            }
        });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decode = jwt.verify(token, JWT_SECRET);
        if(decode.userId) {
            req.userId = decode.userId
        } else {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                success: false,
                message: "Token expired",
                data: {},
                error: {
                    message: "Session expired"
                }
            });
        }
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Internal server error",
            data: {},
            error: {
                message: "Internal server error"
            }
        });
    }
}