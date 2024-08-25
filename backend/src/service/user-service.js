const UserRepository = require("../repository/user-repository");

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(user) {
        try {
            const response = await this.userRepository.create(user);
            return response;
        } catch (error) {
            console.log("error in services");
            throw error;
        }
    } 

    async signin(user) {
        try {
            const response = await this.userRepository.signin(user);
            return response;
        } catch (error) {
            console.log("error in services");
            throw error;
        }
    } 

    async update(id, data) {
        try {
            const response = await this.userRepository.update(id, data);
            return response;
        } catch (error) {
            console.log("error in services");
            throw error;
        }
    } 

    async filter(id, search) {
        try {
            const regex = (pattern) => new RegExp(`.*${pattern}.*`);
            const filter = regex(search);
            const response = await this.userRepository.filter(id, filter);
            return response;
        } catch (error) {
            console.log("error in services");
            throw error;
        }
    }
}

module.exports = UserService;