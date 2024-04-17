const BaseError = require("./base.error");
const { StatusCodes } = require('http-status-codes');

class BadRequest extends BaseError {
    constructor(entityName) {
        super("BadRequest", StatusCodes.BAD_REQUEST, `${entityName} must be between 5 and 8 characters`, {});
    }
}

module.exports = BadRequest;