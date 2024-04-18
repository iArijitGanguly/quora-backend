const { userUtil } = require('../utils');
const ConflictError = require('../errors/conflict.error');
const BadRequest = require('../errors/badRequest.error');

class UserService {

    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async createUser(userData) {
        if(userData.username.length < 5 || userData.username.length > 8) {
            throw new BadRequest('Username');
        }
        
        const existsUserName = await userUtil.existsByUserName(userData.username);
        const existsEmail = await userUtil.existsByEmail(userData.email);

        if(existsUserName && existsEmail) {
            throw new ConflictError('Username', 'Email');
        }
        else if(existsUserName) {
            throw new ConflictError('Username');
        }
        else if(existsEmail) {
            throw new ConflictError('Email');
        }

        const user = await this.userRepository.createUser(userData);
        return user;
    }

    async getUser(userId) {
        const user = await this.userRepository.getUser(userId);
        return user;
    }

}

module.exports = UserService;