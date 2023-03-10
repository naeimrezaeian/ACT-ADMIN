<template>
    <div class="wrapper">
        <div class="head">
            <h1>СОЗДАНИЕ ВОПРОСА</h1>
        </div>
        <div class="vopros_edit">
            <nav class="bread">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Патент</a></li>
                    <li class="breadcrumb-item"><a href="#">Модуль 1</a></li>
                    <li class="breadcrumb-item"><a href="#">Чтение</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Тип вопроса «Аудирование»</li>
                </ol>
            </nav>
            <form>
                <div class="item">
                    <label for="vopr">Напишите название вопроса</label>
                    <input type="text" v-model="newQuestion.desc" id="vopr">
                </div>
                <div class="box">
                    <label for="subtest">Укажите количество прослушиваний</label>
                    <select id="subtest" v-model="newQuestion.listenLimitCount">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                </div>
                <div class="audi">
                    <div class="box">
                        <button type="button" class="add">Загрузить аудио</button>
                        <span>Загрузите файл в формате mp3, wav, ogg</span>
                    </div>
                    <div class="box">
                        <audio controls="controls">
                            <source src="https://webref.ru/example/audio/music.mp3" type="audio/mpeg" />
                        </audio>
                    </div>
                </div>
                <div v-for="(question, index) in newQuestion.questionTexts" :key="question.id" class="audi">
                    <div class="box">
                        <button type="button" class="edit">Редактировать</button>
                        <button type="button" class="delete" @click="removequestion(index)">Удалить</button>
                    </div>
                    <div class="item">
                        <label :for="question.id">Введите текст вопроса</label>
                        <editor :id="question.id" :init="Tinyconfig"
                            :api-key="y2pziixksnltsc59lsigx2xoh6exhrlx403o5usmmmd8awwh" v-model="question.questionTitle">
                        </editor>
                    </div>
                    <div class="box" v-for="(answer, index) in question.answers" :key="answer.id">
                        <label for="od_1" class="blue">###_{{ index + 1 }}</label>
                        <input type="text" v-model="answer.answer" id="od_1">
                        <button type="button" v-if="index === (question.answers.length - 1)" class="add"
                            @click="addNewAnswerOption(question)">Добавить вариант ответа</button>
                    </div>
                </div>
                <button type="button" class="add" @click="addNewQuestion">Добавить вопрос</button>
                <div class="botom">
                    <router-link to="/Questions" class="btn otmena">Отменить</router-link>
                    <button type="button" class="btn save" @click="saveShanges">Создать</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import { mapActions, mapGetters } from 'vuex'
const Tinyconfig = {
    selector: '#tiny',
    height: 214,
    plugins: [
        'advlist autolink link image lists charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks code fullscreen insertdatetime media nonbreaking',
        'table emoticons template paste help'
    ],
    toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
        'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
        'forecolor backcolor emoticons | help',
    menubar: false

}
export default {
    name: "AdminQuestionAudio",
    components: {
        'editor': Editor
    },
    data() {
        return {
            Tinyconfig,
            questionBase: null,

            newQuestion: {
                questionType: 'audio',
                status: 'active',
                listenLimitCount: 1,
                questionTexts: [{
                    questionTitle: '',
                    answers: [{
                        answer: ''
                    }]
                }

                ],

            }
        }
    },
    mounted() {
        this.questionBase = this.getSelectedQuestionBase
        if (this.$route.fullPath.toLocaleLowerCase().endsWith('edit/audio')) {
            this.newQuestion = this.getSelectedQuestion
        }
    },
    computed: {
        ...mapGetters({ getSelectedQuestionBase: 'getSelectedQuestionBase', getSelectedQuestion: 'getSelectedQuestion' })
    },
    methods: {
        ...mapActions({ addQuestion: 'addQuestion', editQuestion: 'editQuestion' }),
        addNewAnswerOption(question) { question.answers.push({ answer: '' }) },
        addNewQuestion() {
            this.newQuestion.questionTexts.push({
                questionTitle: '',
                answers: [{
                    answer: ''
                }]
            })
        },
        removequestion(index) { this.newQuestion.questionTexts.splice(index, 1) },
        async saveShanges() {
            this.newQuestion.questionBaseId = this.questionBase.id
            this.$route.fullPath.toLocaleLowerCase().endsWith('edit/audio') ?
                await this.editQuestion(this.newQuestion) :
                await this.addQuestion(this.newQuestion)
        }
    }

}
</script>

<style lang="scss" scoped></style>