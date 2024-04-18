const { User } = require('../models');
const NotFound = require('../errors/notFound.error');

class UserRepository {
    
    async createUser(userData) {
        try {
            const user = await User.create({
                username: userData.username,
                email: userData.email,
                bio: userData.bio ? userData.bio : ""
            });
            return user;
        } catch (error) {
            throw error;
        }
    }

    async getUser(id) {
        try {
            const user = await User.findById(id);
            if(!user) {
                throw new NotFound('User', id);
            }
            return user;
        } catch (error) {
            throw error;
        }
    }

    async updateUser(id, updatedData) {
        try {
            const user = await User.findByIdAndUpdate(id, updatedData, {new: true});
            if(!user) {
                throw new NotFound('User', id);
            }
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserRepository;