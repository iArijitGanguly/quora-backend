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

    async updateUser(userId, updatedData) {
        let existsUserName = false;
        let existsEmail = false;
        let userName = '';
        let userEmail = '';

        if(updatedData.username) {
            if(updatedData.username.length < 5 || updatedData.username.length > 8) {
                throw new BadRequest('Username');
            }

            userName = await userUtil.checkSameUserName(updatedData.username);
            if(userName == updatedData.username) {
                throw new BadRequest('', 'New username cannot be the same as the old one');
            }

            existsUserName = await userUtil.existsByUserName(updatedData.username);
        }

        if(updatedData.email) {
            userEmail = await userUtil.checkSameEmail(updatedData.email);
            if(userEmail == updatedData.email) {
                throw new BadRequest('', 'New email cannot be the same as the old one')
            }
            
            existsEmail = await userUtil.existsByEmail(updatedData.email);
        }

        if(existsUserName && existsEmail) {
            throw new ConflictError('Username', 'Email');
        }
        else if(existsUserName) {
            throw new ConflictError('Username');
        }
        else if(existsEmail) {
            throw new ConflictError('Email');
        }

        const user = await this.userRepository.updateUser(userId, updatedData);
        return user;
    }

}

module.exports = UserService;