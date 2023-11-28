<template>
    <div class="wrapper">
        <div class="head">
            <h1>СОЗДАНИЕ ВОПРОСА</h1>
        </div>
        <div class="vopros_edit">
            <nav class="bread">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Патент</a></li>
                    <li class="breadcrumb-item"><a href="#">{{ getSelectedQuestionBase.subtest.examModule.title }}</a></li>
                    <li class="breadcrumb-item"><a href="#">{{ getSelectedQuestionBase.subtest.title }}</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Тип вопроса {{ getSelectedQuestionBase.type }}</li>
                </ol>
            </nav>
            <form>
                <div class="item">
                    <label for="vopr">Напишите название вопроса</label>
                    <input type="text" v-model="getNewQuestion.desc" id="vopr">
                </div>
                <div class="box">
                    <label for="subtest">Укажите количество прослушиваний</label>
                    <select id="subtest" v-model="getNewQuestion.listenLimitCount">
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
                    <div class="box" v-if="!getNewQuestion.fileId">
                        <button type="input" class="add" @click.prevent="selectFile">Загрузить аудио</button>
                        <input type="file" ref="fileInput" style="display: none;" accept=".mp3,.wav,.ogg"
                            @change="onFileSelected" multiple="false" />
                        <span>Загрузите файл в формате mp3, wav, ogg</span>
                    </div>
                    <div class="box" v-if="getNewQuestion.fileId">
                        <audio ref="audioPlayer" controls="controls">
                            <source type="audio/mpeg" />
                        </audio>
                        <button type="button" class="delete" @click="removeQuestionFile(index)">Удалить</button>
                    </div>
                </div>
                <div v-for="(question, questionIndex) in  getNewQuestion.questionTexts " :key="question.id" class="audi">
                    <div class="box">
                        <button type="button" class="edit">Редактировать</button>
                        <button type="button" class="delete" @click="removequestion(questionIndex)">Удалить</button>
                    </div>
                    <div class="item">
                        <label :for="question.id">Введите текст вопроса</label>
                        <editor :id="question.id" :init="Tinyconfig"
                            :api-key="y2pziixksnltsc59lsigx2xoh6exhrlx403o5usmmmd8awwh" v-model="question.questionTitle">
                        </editor>
                    </div>
                    <answers-template :questionIndex="questionIndex"></answers-template>
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
import answersTemplate from './answersTemplate.vue'
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
        'editor': Editor,
        answersTemplate
    },
    data() {
        return {
            Tinyconfig,
            questionBase: null,
        }
    },
    async created() {
        await this.setNewQuestion({
            questionType: 'audio',
            status: 'active',
            listenLimitCount: 1,
            questionTexts: [{
                questionTitle: '',
                answers: [{
                    answer: ''
                }]
            }],
        })
    },
    mounted() {

        this.questionBase = this.getSelectedQuestionBase
        if (this.$route.fullPath.toLocaleLowerCase().endsWith('edit/audio')) {
            this.downloadQuestionFile(this.getSelectedQuestion.fileId)
            this.setNewQuestion(this.getSelectedQuestion)
        }
    },
    computed: {
        ...mapGetters({
            getSelectedQuestionBase: 'getSelectedQuestionBase',
            getSelectedQuestion: 'getSelectedQuestion',
            getNewQuestion: 'getNewQuestion',
        })
    },
    methods: {
        ...mapActions({
            addQuestion: 'addQuestion',
            editQuestion: 'editQuestion',
            downloadAudioFile: 'downloadFile',
            uploadAudioFile: 'uploadFile',
            setNewQuestion: 'setNewQuestion',
            addNewQuestion: 'addNewQuestion',
            removequestion: 'removequestion',
        }),
        removeQuestionFile() { this.getNewQuestion.fileId = null },
        async saveShanges() {
            this.getNewQuestion.questionBaseId = this.questionBase.id
            this.$route.fullPath.toLocaleLowerCase().endsWith('edit/audio') ?
                await this.editQuestion(this.getNewQuestion) :
                await this.addQuestion(this.getNewQuestion)
        },
        selectFile() {
            this.$refs.fileInput.click();
        },
        onFileSelected() {
            const file = this.$refs.fileInput.files[0];
            this.uploadAudioFile(file).then((result) => {
                this.getNewQuestion.fileId = result
                this.downloadQuestionFile(result)
            })
        },
        downloadQuestionFile(fileId) {
            this.downloadAudioFile(fileId).then((result) => {
                const blob = new Blob([result.data], { type: 'audio/mpeg' })
                var url = URL.createObjectURL(blob)
                this.$refs.audioPlayer.src = url
                this.$refs.audioPlayer.load()
            })
        },
    }

}
</script>

<style lang="scss" scoped></style>