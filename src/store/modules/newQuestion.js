export default {
    state: {
        newQuestion: null,
        showCorrectAnswerErr: [true],
    },
    actions: {
        setNewQuestion({ commit }, data) {
            commit('setNewQuestion', data)
        },
        addNewAnswerOption({ commit }, questionIndex) {
            commit('addNewAnswerOption', questionIndex)
        },
        deleteAnswer({ commit }, { questionIndex, answerIndex }) {
            commit('deleteAnswer', { questionIndex, answerIndex })
        },
        checkAnswer({ commit }, { questionIndex, answerIndex }) {
            commit('checkAnswer', { questionIndex, answerIndex })
        },
        addNewQuestion({ commit }) {
            commit('addNewQuestion')
        },
        removequestion({ commit }, questionIndex) {
            commit('removequestion', questionIndex)
        },
        setShowCorrectAnswerErr({ commit }) {
            commit('setShowCorrectAnswerErr')
        },
        checkShowCorrectAnswerErr({ state }) {
            const length = (state.showCorrectAnswerErr).length;
            let counter = 0;
            for (let i = 0; i < length; i++) {
                state.showCorrectAnswerErr[i] ? null : counter ++;
            }
            return counter == length ? false : true;
        }
    },
    mutations: {
        setNewQuestion(state, data) {
            state.newQuestion = data
        },
        addNewAnswerOption(state, questionIndex) {
            state.newQuestion.questionTexts[questionIndex].answers.push({answer:''})
        },
        deleteAnswer(state, { questionIndex, answerIndex }) {
            state.newQuestion.questionTexts[questionIndex].answers[answerIndex].isCorrectAnswer == true ?
                state.showCorrectAnswerErr[questionIndex] = true : null ;
            state.newQuestion.questionTexts[questionIndex].answers.splice(answerIndex, 1)
        },
        checkAnswer(state, { questionIndex, answerIndex }) {
            for (let i = 0; i < (state.newQuestion.questionTexts[questionIndex].answers).length; i++) {
                state.newQuestion.questionTexts[questionIndex].answers[i].isCorrectAnswer = false;
            }
            state.newQuestion.questionTexts[questionIndex].answers[answerIndex].isCorrectAnswer = true;
            state.showCorrectAnswerErr[questionIndex] = false;
        },
        addNewQuestion(state) {
            state.newQuestion.questionTexts.push({
                questionTitle: '',
                answers: [{
                    answer: ''
                }]
            });
            state.showCorrectAnswerErr.push(true);
        },
        removequestion(state, questionIndex) {
            state.newQuestion.questionTexts.splice(questionIndex, 1);
            state.showCorrectAnswerErr.splice(questionIndex, 1);
        },
        setShowCorrectAnswerErr(state) {
            state.showCorrectAnswerErr = [true];
        },
    },
    getters: {
        getNewQuestion: (state) => state.newQuestion,
        getShowCorrectAnswerErr: (state) => state.showCorrectAnswerErr,
    }
}