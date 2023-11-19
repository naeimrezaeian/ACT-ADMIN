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
                    <li class="breadcrumb-item active" aria-current="page">Тип вопроса «Список»</li>
                </ol>
            </nav>
            <form>
                <div class="item">
                    <label for="vopr">Напишите название вопроса</label>
                    <input type="text" v-model="newQuestion.desc" id="vopr">
                </div>
                <div class="item">
                    <label for="tiny">Введите текст вопроса</label>
                    <editor id="tiny" :init="Tinyconfig" :api-key="y2pziixksnltsc59lsigx2xoh6exhrlx403o5usmmmd8awwh"
                        v-model="newQuestion.questionTexts[0].questionTitle">
                    </editor>

                </div>
                <div class="box" v-for="(item, index) in newQuestion.questionTexts[0].answers" :key="index">
                    <label for="od_1" class="blue">###_{{ index + 1 }}</label>
                    <input type="checkbox" @click="checkAnswer(index)"
                        :checked="this.newQuestion.questionTexts[0].answers[index].isCorrectAnswer" class="answer">
                    <input type="text" v-model="item.answer">
                    <button v-if="index === (newQuestion.questionTexts[0].answers.length - 1)" 
                        type="button" class="add" @click="addnewAnswerOption">Добавить вариант
                        ответа</button>
                </div>
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
    name: "AdminQuestionSelect",
    components: {
        'editor': Editor
    },
    data() {
        return {
            Tinyconfig,
            questionBase: null,
            
            newQuestion: {
                questionType:'text',
                status:'active',
                questionTexts:[{
                    questionTitle:'',
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
        if(this.$route.fullPath.toLocaleLowerCase().endsWith('edit/text')){
            this.newQuestion=this.getSelectedQuestion
        }
    },
    computed: {
        ...mapGetters({ 
        getSelectedQuestionBase: 'getSelectedQuestionBase',
        getSelectedQuestion:'getSelectedQuestion'
     }),
    },
    methods:{
        ...mapActions({addQuestion:'addQuestion',editQuestion:'editQuestion'}),
        addnewAnswerOption(){this.newQuestion.questionTexts[0].answers.push({answer:''})},
        async saveShanges(){
            this.newQuestion.questionBaseId=this.questionBase.id
            this.$route.fullPath.toLocaleLowerCase().endsWith('edit/text')?
            await this.editQuestion(this.newQuestion):
            await this.addQuestion(this.newQuestion)
        },
        checkAnswer(ind) {
            for (let i = 0; i < (this.newQuestion.questionTexts[0].answers).length; i++) {
                this.newQuestion.questionTexts[0].answers[i].isCorrectAnswer = false;
            }
            this.newQuestion.questionTexts[0].answers[ind].isCorrectAnswer = true;
        }
    }

}
</script>

<style lang="scss" scoped></style>