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
                    <input type="text" v-model="newQuestion.desc" id="vopr">
                    <div v-for="error in v$.newQuestion.desc.$errors" :key="error.$uid" class="error-msg">{{ error.$message }}</div>
                </div>
                <div class="item">
                    <label for="tiny">Введите текст вопроса</label>
                    <editor id="tiny" v-model="newQuestion.questionTexts[0].questionTitle" :init="Tinyconfig"
                        api-key="y2pziixksnltsc59lsigx2xoh6exhrlx403o5usmmmd8awwh">
                    </editor>
                    <div v-for="error in v$.newQuestion.questionTexts[0].questionTitle.$errors" :key="error.$uid" class="error-msg">{{ error.$message }}</div>
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
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
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
    name: "AdminQuestionLetter",
    setup () {
        return { v$: useVuelidate() }
    },
    components: {
        'editor': Editor
    },
    data() {
        return {
            Tinyconfig,
            questionBase: null,

            newQuestion: {
                questionType: 'letter',
                status: 'active',
                questionTexts: [{
                    questionTitle: '',
                }

                ],
            }
        }
    },
    validations () {
        return {
            newQuestion: {
                desc: {
                    required: helpers.withMessage(this.getinputErrorMessages.addQuestion.desc, required),
                },
                questionTexts: [{
                    questionTitle: {
                        required: helpers.withMessage(this.getinputErrorMessages.addQuestion.questionTitle, required),
                    },
                }]
            },
        }
    },
    mounted() {
        this.questionBase = this.getSelectedQuestionBase
        if (this.$route.fullPath.toLocaleLowerCase().endsWith('edit/letter')) {
            this.newQuestion = this.getSelectedQuestion
        }
    },
    computed: {
        ...mapGetters({
            getSelectedQuestionBase: 'getSelectedQuestionBase',
            getSelectedQuestion: 'getSelectedQuestion',
            getinputErrorMessages: 'getinputErrorMessages',
        })
    },
    methods: {
        ...mapActions({
            addQuestion: 'addQuestion',
            editQuestion: 'editQuestion'
        }),
        async saveShanges() {
            const result = await this.v$.$validate();
            if (result) {
                this.newQuestion.questionBaseId = this.questionBase.id
                this.$route.fullPath.toLocaleLowerCase().endsWith('edit/letter') ?
                    await this.editQuestion(this.newQuestion) :
                    await this.addQuestion(this.newQuestion)
            }
        }
    }

}
</script>

<style lang="scss" scoped></style>