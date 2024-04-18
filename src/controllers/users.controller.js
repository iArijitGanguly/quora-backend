const NotImplemented = require('../errors/notImplemented.error');
const { StatusCodes } = require('http-status-codes');
const { UserRepository } = require('../repositories');
const { UserService } = require('../services');

const userService = new UserService(new UserRepository());

function pingUsersController(req, res) {
    return res.json({message: 'userController is up'});
}

async function addUser(req, res, next) {
    try {
        const response = await userService.createUser(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new user',
            error: {},
            data: response
        });
    } catch (error) {
        next(error);
    }
}

async function getUser(req, res, next) {
    try {
        const response = await userService.getUser(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched a user',
            error: {},
            data: response
        });
    } catch (error) {
        next(error);
    }
}

function updateUser(req, res, next) {
    try {
        throw new NotImplemented('updateUser');
    } catch (error) {
        next(error);
    }
}

module.exports = {
    pingUsersController,
    addUser,
    getUser,
    updateUser,
};