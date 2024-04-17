const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class ConflictError extends BaseError {
    constructor(...entities) {
        let errorMessage = '';
        if(entities.length > 1) {
            errorMessage = `${entities[0]} and ${entities[1]} are already in use`;
        }
        else {
            errorMessage = `${entities[0]} is already in use`;
        }
        super('Conflict Error', StatusCodes.CONFLICT, errorMessage, {});
    }
}

module.exports = ConflictError;