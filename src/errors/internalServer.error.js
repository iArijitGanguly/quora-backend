const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class InternalServerError extends BaseError {
    constructor(details) {
        super('Internal Serever Error', StatusCodes.INTERNAL_SERVER_ERROR, 'Something went wrong', details);
    }
}

module.exports = InternalServerError;