const BaseError = require("./base.error");
const { StatusCodes } = require('http-status-codes');

class BadRequest extends BaseError {
    constructor(entityName, customMessage) {
        const errorMessage = entityName ? `${entityName} must be between 5 and 8 characters` : customMessage;
        super("BadRequest", StatusCodes.BAD_REQUEST, errorMessage, {});
    }
}

module.exports = BadRequest;