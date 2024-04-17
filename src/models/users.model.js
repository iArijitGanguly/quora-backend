const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username can not be empty']
    },

    email: {
        type: String,
        required: [true, 'Email can not be empty']
    },

    bio: {
        type: String,
    }
});

const User = model('User', userSchema);

module.exports = User;