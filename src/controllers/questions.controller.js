const NotImplemented = require('../errors/notImplemented.error');
const { QuestionService } = require('../services');
const { QuestionRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');

const questionService = new QuestionService(new QuestionRepository());

function pingQuestionController(req, res) {
    return res.json({message: 'question controller is up'});
}

async function addQuestion(req, res, next) {
    try {
        const response = await questionService.createQuestion(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new question',
            error: {},
            data: response
        });
    } catch (error) {
        next(error);
    }
}

async function getQuestion(req, res, next) {
    try {
        const response = await questionService.searchQuestions(req.query);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all the matching questions',
            error: {},
            data: response
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    pingQuestionController,
    addQuestion,
    getQuestion
};