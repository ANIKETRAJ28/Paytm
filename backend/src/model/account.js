const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
        trim: true
    },
    balance: {
        type: Number,
        default: 0,
        required: true
    }
});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;