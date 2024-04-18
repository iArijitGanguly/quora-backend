const { User } = require('../models');

async function existsByUserName(userName) {
    const user = await User.findOne({username: userName});
    return user != null;
}

async function existsByEmail(email) {
    const user = await User.findOne({email: email});
    return user != null;
}

async function checkSameUserName(userName) {
    const user = await User.findOne({username: userName}, {_id: 0, username: 1});
    return user.username;
}

async function checkSameEmail(email) {
    const user = await User.findOne({email: email}, {_id: 0, email: 1});
    return user.email;
}

module.exports = {
    existsByUserName,
    existsByEmail,
    checkSameUserName,
    checkSameEmail
};