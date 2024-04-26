class QuestionService {

    constructor(questionRepository) {
        this.questionRepository = questionRepository;
    }

    async createQuestion(questionData) {
        const question = await this.questionRepository.createQuestion(questionData);
        return question;
    }

    async searchQuestions(searhTerm) {
        const questions = await this.questionRepository.getQuestions(searhTerm);
        return questions;
    }

}

module.exports = QuestionService;