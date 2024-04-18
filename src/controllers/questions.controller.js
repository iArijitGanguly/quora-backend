const NotImplemented = require('../errors/notImplemented.error');

function pingQuestionController(req, res) {
    return res.json({message: 'question controller is up'});
}

function addQuestion(req, res, next) {
    try {
        throw new NotImplemented('addQuestion');
    } catch (error) {
        next(error);
    }
}

function getQuestion(req, res, next) {
    try {
        throw new NotImplemented('getQuestion');
    } catch (error) {
        next(error);
    }
}

module.exports = {
    pingQuestionController,
    addQuestion,
    getQuestion
};