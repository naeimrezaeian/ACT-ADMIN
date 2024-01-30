<template>
    <div class="box" v-for="(answer, answerIndex) in getNewQuestion.questionTexts[questionIndex].answers" :key="answer.id">
        <label for="od_1" class="blue">###_{{ answerIndex + 1 }}</label>
        <input type="checkbox" @click="checkAnswer({ questionIndex, answerIndex }), checkedIt($event)"
            :checked="getNewQuestion.questionTexts[questionIndex].answers[answerIndex].isCorrectAnswer"
            class="answer">
        <input type="text" v-model="answer.answer" placeholder="answer ...">
        <div v-for="i in [0,1]" :key="i">
            <div v-if="v$.getNewQuestion.questionTexts.$each.$response.$errors[questionIndex]?.answers[i]?.$validator == '$each'"
                class="error-msg">{{
                    v$.getNewQuestion.questionTexts.$each.$response.$errors[questionIndex]?.answers[i]?.$response.$errors[answerIndex]?.answer[0]?.$message
                }}
            </div>
        </div>
        <button type="button" class="delete" @click="deleteAnswer({ questionIndex, answerIndex })"></button>
        <button type="button" v-if="answerIndex === (getNewQuestion.questionTexts[questionIndex].answers.length - 1)" class="add"
            @click="addNewAnswerOption(questionIndex)">Добавить вариант ответа</button>
    </div>
    <button type="button" v-if="getNewQuestion.questionTexts[questionIndex].answers.length == 0" class="add"
        @click="addNewAnswerOption(questionIndex)">Добавить вариант ответа</button>
    <div v-if="v$.getNewQuestion.questionTexts.$each.$response.$errors[questionIndex]?.answers[0]?.$validator == 'minLength' ||
        v$.getNewQuestion.questionTexts.$each.$response.$errors[questionIndex]?.answers[0]?.$validator == 'required'"
        class="error-msg">{{ 
            v$.getNewQuestion.questionTexts.$each.$response.$errors[questionIndex]?.answers[0]?.$message
        }}
    </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import { useVuelidate } from '@vuelidate/core'
import { helpers, minLength, required } from '@vuelidate/validators'
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
                    $each: helpers.forEach({
                        answers: {
                            required: helpers.withMessage(this.getinputErrorMessages.addAnswers.answers, required),
                            minLength: helpers.withMessage(this.getinputErrorMessages.addAnswers.answersMin, minLength(2)),
                            $each: helpers.forEach({
                                answer: {
                                    required: helpers.withMessage(this.getinputErrorMessages.addAnswers.answer, required),
                                },
                            })
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