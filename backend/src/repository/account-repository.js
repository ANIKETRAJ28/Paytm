const { default: mongoose } = require("mongoose");
const Account = require("../model/account");

class AccountRepository {
    async create(id, balance) {
        try {
            const response = await Account.create({userId: id, balance: balance});
            return response;
        } catch (error) {
            console.log("error in repository");
            throw error;
        }
    }
    async addBalance(id, balance) {
        try {
            await Account.findOneAndUpdate({userId: id}, {$inc: {balance: balance}});
            return Account.findOne({userId: id});
        } catch (error) {
            console.log("error in repository");
            throw error;
        }
    }

    async sendBalance(fromAccountId, toAccountId, amount) {
        try {
            const userAccount = await Account.findOne({userId: fromAccountId});
            if(!userAccount || userAccount.balance < amount) {
                throw new Error("Insufficient balance");
            }
            const recieverAccount = await Account.findOne({userId: toAccountId});
            if(!recieverAccount) throw new Error("Reciever does not exists");
            await Account.findOneAndUpdate({userId: toAccountId}, {$inc: {balance: amount}});
            userAccount.balance -= amount;
            await userAccount.save();
            return userAccount.balance;
        } catch (error) {
            console.log("error in repository");
            throw error;
        }
    }
}

module.exports = AccountRepository;