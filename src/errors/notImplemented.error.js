const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class NotImplemented extends BaseError {
    constructor(methodName) {
        super(methodName, StatusCodes.NOT_IMPLEMENTED, `${methodName} is not implemented`, {});
    }
}

module.exports = NotImplemented;