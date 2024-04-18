const express = require('express');
const { questionController } = require('../../controllers');

const questionRouter = express.Router();

questionRouter.post('/', questionController.addQuestion);

questionRouter.get('/search', questionController.getQuestion);

module.exports = questionRouter;