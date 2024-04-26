const BadRequest = require('../errors/badRequest.error');

function validateInput(req, res, next) {
    const userInput = req.body;

    const markdownRegex = /[#*`\-_~\[\]()>]/;
    const htmlRegex = /<[^>]*>/;

    if(markdownRegex.test(userInput.title) || htmlRegex.test(userInput.body)) {
        const error = new BadRequest('', 'Input should not contain markdown or html');
        return next(error);
    }
    next();
}

module.exports = {
    validateInput
};