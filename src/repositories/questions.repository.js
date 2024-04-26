const { Question } = require('../models');

class QuestionRepository {

    async createQuestion(questionData) {
        try {
            const question = await Question.create({
                title: questionData.title,
                body: questionData.body,
                userId: questionData.userId,
                topics: questionData.topics ? questionData.topics : ""
            });
            return question;
        } catch (error) {
            throw error;
        }
    }

    async getQuestions(searchTerm) {
        try {
            const query = [];
            let isQueryExists = false;

            if(searchTerm.text) {
                const textPattern = new RegExp(searchTerm.text, 'i');
                query.push({ title: { $regex: textPattern } });
                query.push({ body: { $regex: textPattern } });
                isQueryExists = true;
            }

            if(searchTerm.tag) {
                const tagRegex = new RegExp(searchTerm.tag, 'i');
                query.push({ topics: { $in: tagRegex}});
                isQueryExists = true;
            }

            const questions = await Question.find(isQueryExists ? { $or: query } : {});
            console.log(questions);
            return questions;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = QuestionRepository;