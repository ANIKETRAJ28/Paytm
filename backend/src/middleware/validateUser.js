const zod = require("zod");
const { StatusCodes } = require("http-status-codes");

const validateSignUp = (req, res, next) => {
    const userSchema = zod.object({ // zod object for validation
        username: zod.string(),
        password: zod.string(),
        firstname: zod.string(),
        lastname: zod.string()
    });

    const user = req.body;
    // safeParse validates the user & if the validation fails then it doesn't throw the error.
    // parse validates the user & if the validation fails then it throws the error
    const validate = userSchema.safeParse(user);

    if(!validate.success) {
        if(validate.error.issues[0].path[0] == "password") {
            return res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: "Authentication failed",
                data: {},
                error: {
                    message: "Password missing"
                }
            })
        } else if(validate.error.issues[0].path[0] == "username") {
            return res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: "Authentication failed",
                data: {},
                error: {
                    message: "Username missing"
                }
            });
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: "Authentication failed",
                data: {},
                error: {
                    message: "First name or last name missing"
                }
            });
        }
    }
    req.user = validate.data;
    next();
}

const validateSignIn = (req, res, next) => {
    const userSchema = zod.object({ // zod object for validation
        username: zod.string(),
        password: zod.string(),
    });

    const user = req.body;
    // safeParse validates the user & if the validation fails then it doesn't throw the error.
    // parse validates the user & if the validation fails then it throws the error
    const validate = userSchema.safeParse(user);

    if(!validate.success) {
        if(validate.error.issues[0].path[0] == "password") {
            return res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: "Authentication failed",
                data: {},
                error: {
                    message: "Password missing"
                }
            })
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: "Authentication failed",
                data: {},
                error: {
                    message: "Username missing"
                }
            });
        }
    }
    req.user = validate.data;
    next();
}

const validateUpdateUser = (req, res, next) => {
    if(!req.body.username &&
        !req.body.firstname &&
        !req.body.lastname &&
        !req.body.password
    ) return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Nothing to update",
        data: {},
        error: {
            message: "No arguments for updation"
        }
    });
    const requestObj = {username: req.body?.username, password: req.body?.password, firstname: req.body?.firstname, lastname: req.body?.lastname};
    req.user = requestObj;
    next();
}

module.exports = {
    validateSignUp,
    validateSignIn,
    validateUpdateUser
};