const { StatusCodes } = require("http-status-codes");
const AccountService = require("../service/account-service");

const accountService = new AccountService();

const addAccount = async (req, res) => {
    try {
        const response = await accountService.create(req.id);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Account created",
            data: response,
            error: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Cannot able to create account",
            data: {},
            error: error
        })
    }
}

const addBalance = async (req, res) => {
    try {
        const response = await accountService.addBalance(req.id, req.body.balance);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Added balance",
            data: response,
            error: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Cannot add balance",
            data: {},
            error: error
        });
    }
}

const sendBalance = async(req, res) => {
    try {
        const response = await accountService.sendBalance(req.id, req.body.toAccountId, req.body.amount);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Transaction successful",
            data: response,
            error: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            data: {},
            error: error
        });
    }
}

module.exports = {
    addAccount,
    addBalance,
    sendBalance
}