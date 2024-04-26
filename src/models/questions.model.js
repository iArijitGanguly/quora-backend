const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const questionSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title can not be empty']
    },

    body: {
        type: String,
        required: [true, 'body can not be empty']
    },

    topics: {
        type: [String]
    },

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'userId can not be empty']
    }
}, {timestamps: true});

const Question = model('Question', questionSchema);

module.exports = Question;