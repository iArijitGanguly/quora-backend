const { User } = require('../models');

async function existsByUserName(userName) {
    const user = await User.findOne({username: userName});
    return user != null;
}

async function existsByEmail(email) {
    const user = await User.findOne({email: email});
    return user != null;
}

module.exports = {
    existsByUserName,
    existsByEmail
};