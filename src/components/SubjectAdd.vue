<template>
    <div class="wrapper">
        <div class="head">
            <h1>СОЗДАНИЕ СУБТЕСТА</h1>
        </div>
        <div class="subtest">
            <div class="title">Общая информация</div>
            <form>
                <div class="box">
                    <div class="item">
                        <label for="zag">Заголовок</label>
                        <input type="text" id="zag" v-model="subtest.title">
                    </div>
                    <div class="item">
                        <label for="time">Время прохождения</label>
                        <input type="time" placeholder="_ _ : _ _" id="time" onfocus="(this.type='time')" v-model="time"
                            step="60">
                    </div>
                    <div class="item">
                        <label for="col">Количество баллов</label>
                        <input type="text" id="col" v-model.number="subtest.maxScore">
                    </div>
                    <div class="item">
                        <label for="col_p">Проходной балл</label>
                        <input type="text" id="col_p" v-model.number="subtest.passingScore">
                    </div>
                </div>
                <div class="box">
                    <div class="item">
                        <label for="urov">Уровень</label>
                        <select id="urov" v-model="subtest.examModule.examLevelId">
                            <option value="" disabled selected>Выбрать уровень</option>
                            <option v-for="item in levels" :key="item.id" :value="item.id">{{ item.title }}</option>
                        </select>
                    </div>
                    <div class="item">
                        <label for="model">Модуль</label>
                        <select id="model" v-model="subtest.examModuleId">
                            <option value="" disabled selected>Выбрать модуль</option>
                            <option v-for="item in levelModules" :key="item.id" :value="item.id">{{ item.title }}</option>
                        </select>
                    </div>
                    <div class="item">
                        <label for="tip">Тип субътеста</label>
                        <select id="tip" v-model="subtest.questionType">
                            <option value="" disabled selected>Выбрать тип</option>
                            <option v-for="item in subtestTypes" :key="item.key" :value="item.key">{{ item.value }}</option>
                        </select>
                    </div>
                    <div class="item">
                        <label for="tip_p">Тип проверки</label>
                        <select id="tip_p" v-model="subtest.checkType">
                            <option value="" disabled selected>Автоматический</option>
                            <option v-for="item in subtesCheckType" :key="item.key" :value="item.key">{{ item.value }}
                            </option>
                        </select>
                    </div>
                    <div class="item">
                        <label for="video">Видео запись</label>
                        <select id="video" v-model="cameraRecord">
                            <option value="" disabled selected>Автоматический</option>
                            <option v-for="item in boolTypes" :key="item.key" :value="item.key">{{ item.value }}</option>
                        </select>
                    </div>
                </div>
                <div class="item">
                    <label for="text">Описание</label>
                    <editor id="tiny" :init="Tinyconfig" :api-key="y2pziixksnltsc59lsigx2xoh6exhrlx403o5usmmmd8awwh"
                        v-model="subtest.desc">
                    </editor>
                </div>
                <div class="box" v-if="isEditMode">
                    <div class="col">
                        <div class="title">Выбор варианта</div>
                        <div class="panel">
                            <div class="top_panel">
                                <div class="chek">
                                    <input type="checkbox" id="all" v-model="selectAllVariants" class="checkbox">
                                    <label for="all">Выбрать все</label>
                                </div>
                                <button type="button" class="delete" @click="removeSelectedVariants">Удалить выбранные из
                                    варианта</button>
                            </div>
                            <div class="variant" v-for="item in subtestVariants" :key="item.id ?? item.nId">
                                <div class="chek">
                                    <input type="checkbox" :id="item.id ?? item.nId" v-model="item.isSelected"
                                        class="checkbox">
                                    <label :for="item.id ?? item.nId"></label>
                                </div>
                                <div class="folder">
                                    <div class="fol" v-if="!item.toggleEditMode">
                                        <div class="zag">{{ item.title }}</div>
                                        <button type="button" class="edit" @click="toggleVariantEdit(item)"></button>
                                    </div>
                                    <div class="fol" v-else>
                                        <input type="input" v-model="item.title" @keyup.enter="toggleVariantEdit(item)" />
                                        <button type="button" class="edit" @click="toggleVariantEdit(item)"></button>
                                    </div>
                                    <div class="text" v-for="(question, index) in item.questions" :key="question.id">
                                        <div class="txt" v-html="question?.question?.questionTexts[0]?.questionTitle"></div>
                                        <button type="button" class="delete"
                                            @click="removeQuestionFromVariant(item, index)"></button>
                                    </div>

                                </div>

                            </div>
                            <button type="button" class="add" @click="addNewVariant">Добавить вариант</button>
                        </div>
                    </div>
                    <div class="col">
                        <div class="title">Выбор вопроса</div>
                        <div class="panel">
                            <div class="top_panel">
                            </div>
                            <div class="variant" v-for="item in questionBase" :key="item.id">
                                <div class="folder">
                                    <div class="fol">
                                        <div class="zag">{{ item.title }}</div>
                                        <div class="sub_folder">
                                            <div class="item" v-for="question in item.examQuestions" :key="question.id">
                                                <div class="chek">
                                                    <input type="checkbox" :id="question.id" v-model="question.isSelected"
                                                        class="checkbox">
                                                    <label :for="question.id"></label>
                                                </div>
                                                <div class="name" v-html="question.questionTexts[0].questionTitle"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn" @click="addQuestionsToVariants">Добавить выбранное к
                                варианту</button>
                        </div>
                    </div>
                </div>
                <div class="botom">
                    <router-link to="/Subjects" class="btn otmena">Отменить</router-link>

                    <button type="button" class="btn save" @click="saveShanges">Сохранить</button>
                </div>
            </form>
        </div>
    </div>
    <div class="popup" id="popup1">
        <div class="object">
            <button type="button" class="clouse"><img src="img/clouse.svg" alt=""></button>
            <div class="title">Выбор вопроса из базы</div>
            <form>


                <div class="panel">
                    <div class="top_panel">
                        <div class="chek">
                            <input type="checkbox" id="all_9" value="" class="checkbox">
                            <label for="all_9">Выбрать все</label>
                        </div>
                    </div>
                    <div class="table moduls">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="all_10" value="" class="checkbox" checked>
                                        <label for="all_10"></label>
                                    </td>
                                    <td>
                                        <a href="#">База вопросов 1</a>
                                    </td>
                                    <td>Патент</td>
                                    <td>Русский язык</td>
                                    <td>Не присвоен</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="all_11" value="" class="checkbox" checked>
                                        <label for="all_11"></label>
                                    </td>
                                    <td>
                                        <a href="#">База вопросов 2</a>
                                    </td>
                                    <td>Патент</td>
                                    <td>Русский язык</td>
                                    <td>Не присвоен</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="all_12" value="" class="checkbox">
                                        <label for="all_12"></label>
                                    </td>
                                    <td>
                                        <a href="#">База вопросов 3</a>
                                    </td>
                                    <td>Патент</td>
                                    <td>Русский язык</td>
                                    <td>Не присвоен</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="all_13" value="" class="checkbox">
                                        <label for="all_13"></label>
                                    </td>
                                    <td>
                                        <a href="#">База вопросов 4</a>
                                    </td>
                                    <td>Патент</td>
                                    <td>Русский язык</td>
                                    <td>Не присвоен</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="all_14" value="" class="checkbox">
                                        <label for="all_14"></label>
                                    </td>
                                    <td>
                                        <a href="#">База вопросов 5</a>
                                    </td>
                                    <td>Патент</td>
                                    <td>Русский язык</td>
                                    <td>Не присвоен</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="all_15" value="" class="checkbox">
                                        <label for="all_15"></label>
                                    </td>
                                    <td>
                                        <a href="#">База вопросов 6</a>
                                    </td>
                                    <td>Патент</td>
                                    <td>Русский язык</td>
                                    <td>Не присвоен</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="all_16" value="" class="checkbox">
                                        <label for="all_16"></label>
                                    </td>
                                    <td>
                                        <a href="#">База вопросов 7</a>
                                    </td>
                                    <td>Патент</td>
                                    <td>Русский язык</td>
                                    <td>Не присвоен</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="all_17" value="" class="checkbox">
                                        <label for="all_17"></label>
                                    </td>
                                    <td>
                                        <a href="#">База вопросов 8</a>
                                    </td>
                                    <td>Патент</td>
                                    <td>Русский язык</td>
                                    <td>Не присвоен</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="all_18" value="" class="checkbox">
                                        <label for="all_18"></label>
                                    </td>
                                    <td>
                                        <a href="#">База вопросов 9</a>
                                    </td>
                                    <td>Патент</td>
                                    <td>Русский язык</td>
                                    <td>Не присвоен</td>
                                    <td>9</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="botom">

                    <button type="button" class="btn save" @click="saveShanges">Добавить</button>
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
    name: "AdminSubjectAdd",
    data() {
        return {
            Tinyconfig,
            selectAll: false,
            subtest: {
                checkType: 'auto',
                cameraRecord: false,
                maxTime: 0,
                examModule: {

                }
            }
        }
    },
    async mounted() {
        if (this.isEditMode) {
            this.subtest = this.editSubtest
            await this.getSubtestVariatns(this.subtest.id)
            await this.getQuestionBases({ status: 'active', subtest: this.subtest.id, page: 0, pageSize: 0, includeQuestions: true })
        }
    },
    components: {
        'editor': Editor
    },
    computed: {
        ...mapGetters({
            modules: 'getModules',
            levels: 'getExamLevels',
            statuses: 'getStatusField',
            subtestTypes: 'getSubtestTypes',
            boolTypes: 'getBoolTypes',
            editSubtest: 'getEditSubtest',
            subtestVariants: 'getSubtestVariants',
            questionBase: 'getQuestionBase',
            subtesCheckType: 'getSubtestCheckType'
        }),
        selectAllVariants: {
            get() {
                return this.selectAll
            },
            set(newVal) {
                this.selectAll = newVal
                this.subtestVariants.forEach(variant => {
                    variant.isSelected = newVal
                })
            }
        },
        levelModules: {
            get() {
                return this.modules.filter(x => x.examLevelId === this.subtest.examModule.examLevelId)
            }
        },
        cameraRecord: {
            get() {
                return this.subtest.cameraRecord.toString()
            },
            set(newVal) {
                this.subtest.cameraRecord = this.$convertToBool(newVal)
            }
        },
        time: {
            get() {
                return this.$convertToTime(this.subtest.maxTime)
            },
            set(newVal) {
                this.subtest.maxTime = this.$convertToMinutes(newVal)
            }
        },
        isEditMode: {
            get() {
                return this.$route.fullPath.toLocaleLowerCase().endsWith("edit")
            }
        }
    },
    methods: {
        ...mapActions({
            editCurrentSubtest: 'editSubtest',
            addSubtest: 'addNewSubtest',
            getSubtestVariatns: 'fetchSubtestVariants',
            getQuestionBases: 'fetchQuestionBases',
            updateSubtestVariant: 'updateSubtestVariant'
        }),
        toggleVariantEdit(item) {
            if (!item.toggleEditMode) {
                item.toggleEditMode = false
            }
            item.toggleEditMode = !item.toggleEditMode
        },
        addNewVariant() {
            this.subtestVariants.push({
                nId: `variant${this.subtestVariants.length} `,
                title: '',
                subtestId: this.subtest.id,
                questions: [],
                toggleEditMode: true
            })
        },
        removeSelectedVariants() {
            const items = this.subtestVariants.filter(item => !item.isSelected)
            this.subtestVariants.splice(0, this.subtestVariants.length)
            this.subtestVariants.push(...items)
        },
        removeQuestionFromVariant(variant, questionIndex) {
            variant.questions.splice(questionIndex, 1)
        },
        addQuestionsToVariants() {
            var selectedVariants = this.subtestVariants.filter(item => item.isSelected)
            var selectedQuestions = []
            this.questionBase.forEach(questions => {
                selectedQuestions.push(...questions.examQuestions.filter(item => item.isSelected))
            })
            selectedVariants.forEach(variant => {
                selectedQuestions.forEach(question => {
                    variant.questions.push({
                        variantId: variant.id,
                        questionId: question.id,
                        question: question
                    })
                })
                variant.isSelected = false
            });
        },
        async saveShanges() {
            this.isEditMode ?
                await this.editCurrentSubtest(this.subtest) :
                await this.addSubtest(this.subtest)
            if (this.isEditMode) {
                this.updateSubtestVariant({ subtestId: this.subtest.id, variants: this.subtestVariants })
            }
        }
    },
    watch: {
        'subtest.examModule.examLevelId': function (_, oldVal) {
            if (oldVal)
                this.subtest.examModuleId = ''
        },
    },

}
</script>

<style lang="scss" scoped></style>