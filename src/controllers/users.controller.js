const NotImplemented = require('../errors/notImplemented.error');

function pingUsersController(req, res) {
    return res.json({message: 'userController is up'});
}

function addUser(req, res, next) {
    try {
        throw new NotImplemented('addUser');
    } catch (error) {
        next(error);
    }
}

function getUser(req, res, next) {
    try {
        throw new NotImplemented('getUser');
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