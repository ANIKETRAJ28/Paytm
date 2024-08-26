const AccountRepository = require("../repository/account-repository");

class AccountService {
    constructor() {
        this.accountRepository = new AccountRepository();
    }

    async create(id) {
        try {
            const balance = Math.floor(Math.random()*10000)+1;
            const response = await this.accountRepository.create(id, balance);
            return response;
        } catch (error) {
            console.log("error in services");
            throw error;
        }
    }

    async addBalance(id, balance) {
        try {
            const response = await this.accountRepository.addBalance(id, balance);
            return response;
        } catch (error) {
            console.log("error in services");
            throw error;
        }
    }

    async sendBalance(fromAccountId, toAccountId, amount) {
        try {
            const response = await this.accountRepository.sendBalance(fromAccountId, toAccountId, amount);
            return response;
        } catch (error) {
            console.log("error in services");
            throw error;
        }
    }
}

module.exports = AccountService;