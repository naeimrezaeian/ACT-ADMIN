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
                <div class="item">
                    <label for="tiny">Введите текст вопроса</label>
                    <editor id="tiny" :init="Tinyconfig" :api-key="y2pziixksnltsc59lsigx2xoh6exhrlx403o5usmmmd8awwh"
                        v-model="getNewQuestion.questionTexts[0].questionTitle">
                    </editor>

                </div>
                <answers-template :questionIndex="0"></answers-template>
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
    name: "AdminQuestionSelect",
    components: {
        'editor': Editor,
        answersTemplate,
    },
    data() {
        return {
            Tinyconfig,
            questionBase: null,
        }
    },
    async created() {
        await this.setNewQuestion({
            questionType:'text',
            status:'active',
            questionTexts:[{
                questionTitle:'',
                answers: [{
                    answer: ''
                }]
            }],
        })
    },
    async mounted() {
        this.questionBase = this.getSelectedQuestionBase
        if(this.$route.fullPath.toLocaleLowerCase().endsWith('edit/text')){
            await this.setNewQuestion(this.getSelectedQuestion)
        }
    },
    computed: {
        ...mapGetters({ 
            getSelectedQuestionBase: 'getSelectedQuestionBase',
            getSelectedQuestion:'getSelectedQuestion',
            getNewQuestion: 'getNewQuestion',
        }),
    },
    methods:{
        ...mapActions({
            addQuestion:'addQuestion',
            editQuestion:'editQuestion',
            setNewQuestion: 'setNewQuestion',
        }),
        addnewAnswerOption(){this.newQuestion.questionTexts[0].answers.push({answer:''})},
        async saveShanges(){
            this.getNewQuestion.questionBaseId = this.questionBase.id
            this.$route.fullPath.toLocaleLowerCase().endsWith('edit/text')?
            await this.editQuestion(this.getNewQuestion):
            await this.addQuestion(this.getNewQuestion)
        },
    }

}
</script>

<style lang="scss" scoped></style>