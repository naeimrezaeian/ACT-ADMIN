<template>
    <div class="box" v-for="(answer, answerIndex) in getNewQuestion.questionTexts[questionIndex].answers" :key="answer.id">
        <label for="od_1" class="blue">###_{{ answerIndex + 1 }}</label>
        <input type="checkbox" @click="checkAnswer({ questionIndex, answerIndex }), checkedIt($event)"
            :checked="getNewQuestion.questionTexts[questionIndex].answers[answerIndex].isCorrectAnswer"
            class="answer">
        <input type="text" v-model="answer.answer" placeholder="answer ...">
        <button type="button" class="delete" @click="deleteAnswer({ questionIndex, answerIndex })"></button>
        <button type="button" v-if="answerIndex === (getNewQuestion.questionTexts[questionIndex].answers.length - 1)" class="add"
            @click="addNewAnswerOption(questionIndex)">Добавить вариант ответа</button>
    </div>
        <div v-if="v$.getNewQuestion.questionTexts?.$errors[0]?.$response?.$errors[questionIndex]?.answers[0].$validator =='minLength'"
            class="error-msg">{{
                v$.getNewQuestion.questionTexts?.$errors[0]?.$response?.$errors[questionIndex]?.answers[0].$message
            }}
        </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import { useVuelidate } from '@vuelidate/core'
import { helpers, minLength } from '@vuelidate/validators'
export default {
    name:'answersAdd',
    props:['questionIndex'],
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {}
    },
    validations () {
        return {
            getNewQuestion: {
                questionTexts: {
                    required: helpers.forEach({
                        answers: {
                            minLength: helpers.withMessage(this.getinputErrorMessages.addAnswers.answersMin, minLength(2)),
                            // required: helpers.forEach({
                            //     isCorrectAnswer: {
                            //         requiredIf: helpers.withMessage(
                            //             this.getinputErrorMessages.addAnswers.correctAnswer,
                            //             requiredIf(() => {
                            //                 return this.getNewQuestion.questionTexts.answers.isCorrectAnswer == false | null ? false : true;
                            //             })
                            //         ),
                            //     },
                            // })
                        }
                    }),
                }
            },
        }
    },
    async mounted() {
        await this.getNewQuestion;
    },
    computed: {
        ...mapGetters({
            getNewQuestion: 'getNewQuestion',
            getinputErrorMessages: 'getinputErrorMessages',
        }),
    },
    methods: {
        ...mapActions({
            addNewAnswerOption: 'addNewAnswerOption',
            deleteAnswer: 'deleteAnswer',
            checkAnswer: 'checkAnswer',
        }),
        checkedIt(event) {
            event.target.checked = true;
        }
    }
}
</script>


<style scoped>
.delete {
    padding: 15px 10px !important;
    margin: 0 30px 0 10px !important;
}
</style>