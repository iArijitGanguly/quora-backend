const express = require('express');
const { questionController } = require('../../controllers');
const { questionValidator } = require('../../validators');

const questionRouter = express.Router();

questionRouter.post('/', questionValidator.validateInput, questionController.addQuestion);

questionRouter.get('/search', questionController.getQuestion);

module.exports = questionRouter;