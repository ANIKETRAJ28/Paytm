const zod = require("zod");

const validateUser = (req, res, next) => {
    const userSchema = zod.object({ // zod object for validation
        username: zod.string(),
        password: zod.string()
    });

    const user = req.body;
    // safeParse validates the user & if the validation fails then it doesn't throw the error.
    // parse validates the user & if the validation fails then it throws the error
    const validate = userSchema.safeParse(user);

    if(!validate.success) {
        if(validate.error.issues[0].path[0] == "password") {
            return res.status(401).json({
                success: false,
                error: {
                    message: "password missing"
                }
            })
        } else {
            return res.status(401).json({
                success: false,
                error: {
                    message: "username missing"
                }
            });
        }
    }
    req.user = validate.data;
    next();
}

module.exports = {
    validateUser
};