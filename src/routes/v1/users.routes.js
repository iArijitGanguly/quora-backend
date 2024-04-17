const express = require('express');
const { userController } = require('../../controllers');

const userRouter = express.Router();

userRouter.get('/ping', userController.pingUsersController);

userRouter.get('/:id', userController.getUser);

userRouter.post('/', userController.addUser);

userRouter.put('/:id', userController.updateUser);

module.exports = userRouter;