<template>
    <div class="wrapper">
        <div class="head">
            <h1>БАЗА ВОПРОСОВ</h1>
            <div class="bot">
                <button type="button" class="add show_popup" @click="addnewItem" rel="popup1">Создать базу</button>
            </div>
        </div>
        <div class="serch">
            <form>
                <div class="box">
                    <input type="text" class="serch_in" v-model="filter.name"
                        placeholder="Поиск по составителю или вопросу">
                    <span class="lup"></span>
                    <button type="button" class="btn" @click="searchQuestions()">Найти</button>
                </div>
                <div class="box">
                    <select v-model="filter.level">
                        <option value="" disabled selected>Выбрать уровень</option>
                        <option value="" v-if="levels.length > 0">{{ allForDropdowns }}</option>
                        <option v-for="item in levels" :key="item.id" :value="item.id">{{ item.title }}</option>
                    </select>
                    <select v-model="filter.module">
                        <option value="" disabled selected>Выбрать модуль</option>
                        <option value="" v-if="filter.level && filterLevelModules.length > 0">{{ allForDropdowns }}</option>
                        <option v-for="item in filterLevelModules" :key="item.id" :value="item.id">{{ item.title }}</option>
                    </select>
                    <select v-model="filter.subtest">
                        <option value="" disabled selected>Выбрать субтест</option>
                        <option value="" v-if="filter.module && filterMoudleSubtests.length > 0">{{ allForDropdowns }}</option>
                        <option v-for="item in filterMoudleSubtests" :key="item.id" :value="item.id">{{ item.title }}</option>
                    </select>
                    <select v-model="filter.status">
                        <option value="" disabled selected>Статус базы</option>
                        <option value="" v-if="statuses.length > 0">{{ allForDropdowns }}</option>
                        <option v-for="item in statuses" :key="item.key" :value="item.key">{{ item.value }}</option>
                    </select>
                    <div class="bot">
                        <button type="button" class="rezet" @click="resetFilters">Сбросить фильтры</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="articl">
            <div class="box">
                <div class="item" v-for="item in questionBases" :key="item.id">
                    <div class="top_zag">
                        <div class="zag">{{ item.title }}</div>
                        <button type="button" class="delete" @click="deleteItem(item)"></button>
                        <button type="button" class="edit" @click="selectToEdit(item)"></button>
                    </div>
                    <ul class="spisok">
                        <li>
                            <span>Уровень</span>
                            <strong>{{ item.subtest.examModule.examLevel.title }}</strong>
                        </li>
                        <li>
                            <span>Модуль</span>
                            <strong>{{ item.subtest.examModule.title }}</strong>
                        </li>
                        <li>
                            <span>Субтест</span>
                            <strong>{{ item.subtest.title }}</strong>
                        </li>
                        <li>
                            <span>Всего</span>
                            <strong>{{ item.examQuestions.length }} вопросов</strong>
                        </li>
                        <li>
                            <span>Тип</span>
                            <strong>{{ subtestType(item.type) }}</strong>
                        </li>
                        <li>
                            <span>Составитель</span>
                            <strong>{{ item.createdBy.name + ' ' + item.createdBy.family }}</strong>
                        </li>
                    </ul>
                    <router-link :to="{ path: 'Questions/' + item.id }" class="btn"
                        @click="setCurrentQuestionBase(item)">Просмотр</router-link>
                </div>
            </div>
            <act-pagination :totalPages="paging.totalPages" :perPage="this.defaultPaging.pageSize"
                :currentPage="currentPage" :maxVisibleButtons="this.defaultPaging.maxVisibleButtons"
                @pagechanged="onPageChange" />
        </div>
    </div>
    <div class="popup" id="popup1">
        <div class="object">
            <button type="button" class="clouse"><img src="@/assets/img/clouse.svg" alt=""></button>
            <div class="sostav">
                <div class="title">Общая информация</div>
                <form>
                    <div class="box">
                        <div class="item">
                            <label for="name">Название базы</label>
                            <input type="text" id="name" v-model="newQuestionBase.title">
                            <div v-for="error in v$.newQuestionBase.title.$errors" :key="error.$uid" class="error-msg">{{ error.$message }}</div>
                        </div>
                        <div class="item">
                            <label for="subtest">Тип вопроса</label>
                            <select id="subtest" v-model="newQuestionBase.type">
                                <option value="" disabled selected>Выбрать тип</option>
                                <option v-for="item in subtestTypes" :key="item.key" :value="item.key">{{ item.value }}
                                </option>
                            </select>
                            <div v-for="error in v$.newQuestionBase.type.$errors" :key="error.$uid" class="error-msg">{{ error.$message }}</div>
                        </div>

                        <div class="item">
                            <label for="subtest">Статус</label>
                            <select id="subtest" v-model="newQuestionBase.status">
                                <option value="" disabled selected>Выбрать статус</option>
                                <option v-for="item in statuses" :key="item.key" :value="item.key">{{ item.value }}</option>
                            </select>
                            <div v-for="error in v$.newQuestionBase.status.$errors" :key="error.$uid" class="error-msg">{{ error.$message }}</div>
                        </div>


                    </div>
                    <div class="box">
                        <div class="item">
                            <label for="uroven">Уровень</label>
                            <select id="uroven" v-model="newQuestionBase.subtest.examModule.examLevelId">
                                <option value="" disabled selected>Выбрать уровень</option>
                                <option v-for="item in levels" :key="item.id" :value="item.id">{{ item.title }}</option>
                            </select>
                            <div v-for="error in v$.newQuestionBase.subtest.examModule.examLevelId.$errors" :key="error.$uid" class="error-msg">{{ error.$message }}</div>
                        </div>

                        <div class="item">
                            <label for="model">Модуль</label>
                            <select id="model" v-model="newQuestionBase.subtest.examModuleId">
                                <option value="" disabled selected>Выбрать модуль</option>
                                <option v-for="item in levelModules" :key="item.id" :value="item.id">{{ item.title }}
                                </option>
                            </select>
                            <div v-for="error in v$.newQuestionBase.subtest.examModuleId.$errors" :key="error.$uid" class="error-msg">{{ error.$message }}</div>
                        </div>


                        <div class="item">
                            <label for="uroven">Субтест</label>
                            <select id="uroven" v-model="newQuestionBase.subtestId">
                                <option value="" disabled selected>Выбрать Субтест</option>
                                <option v-for="item in moudleSubtests" :key="item.id" :value="item.id">{{ item.title }}
                                </option>
                            </select>
                            <div v-for="error in v$.newQuestionBase.subtestId.$errors" :key="error.$uid" class="error-msg">{{ error.$message }}</div>
                        </div>

                    </div>

                    <div class="botom">

                        <button type="button" class="btn save" @click="addNewQuestionBase">Создать базу</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ActPagination from './elementComponents/ActPagination.vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
export default {
    name: "AdminQuestions",
    setup () {
        return { v$: useVuelidate() }
    },
    components: {
        ActPagination
    },
    data() {
        return {
            filter: {
                name: '',
                level: '',
                module: '',
                subtest: '',
                status: '',
                page: 1
            },
            newQuestionBase: {
                subtest: {
                    examModuleId: '',
                    examModule: {
                        examLevelId: ''
                    }
                },
                subtestId: '',
            },
            isEdit: false,
            currentPage: 1,
        }
    },
    validations () {
        return {
            newQuestionBase: {
                title: {
                    required: helpers.withMessage(this.getinputErrorMessages.title, required),
                },
                type: {
                    required: helpers.withMessage(this.getinputErrorMessages.addQuestionBase.type, required),
                },
                status: {
                    required: helpers.withMessage(this.getinputErrorMessages.status, required),
                },
                subtest: {
                    examModule: {
                        examLevelId: {
                            required: helpers.withMessage(this.getinputErrorMessages.examLevel, required),
                        },
                    },
                    examModuleId: {
                        required: helpers.withMessage(this.getinputErrorMessages.examModule, required),
                    },
                },
                subtestId: {
                    required: helpers.withMessage(this.getinputErrorMessages.addQuestionBase.subtest, required),
                },
            },
        }
    },
    async mounted() {
        await this.getLevels({})
        await this.getModules({})
        await this.getSubtests({})
        await this.getQuestionBases({ page: 1, pageSize: this.defaultPaging.pageSize })
        let self = this
        this.$Jquery('.show_popup').click(function () {
            var popup_id = self.$Jquery(this).attr("rel")
            self.$Jquery("#" + popup_id).show();
        })

        this.$Jquery('.clouse').click(function () {
            self.$Jquery('.popup').hide();
            self.$Jquery('body').removeClass('hide');
        })

    },
    computed: {
        ...mapGetters({
            statuses: 'getStatusField',
            levels: 'getExamLevels',
            modules: 'getModules',
            subtests: 'getSubtests',
            questionBases: 'getQuestionBase',
            subtestTypes: 'getSubtestTypes',
            defaultPaging: 'getDefaultPaging',
            paging: 'getPaging',
            getSwalDeleteDialog: 'getSwalDeleteDialog',
            allForDropdowns: 'getAllForDropdowns',
            getinputErrorMessages: 'getinputErrorMessages',
        }),
        levelModules: {
            get() {
                return this.modules.filter(e => e.examLevelId == this.newQuestionBase.subtest.examModule.examLevelId)
            }
        },
        filterLevelModules: {
            get() {
                return this.modules.filter(e => e.examLevelId === this.filter.level)
            }
        },
        moudleSubtests: {
            get() {
                return this.subtests.filter(e => e.examModuleId == this.newQuestionBase.subtest.examModuleId && e.questionType === this.newQuestionBase.type)
            }
        },
        filterMoudleSubtests: {
            get() {
                return this.subtests.filter(e => e.examModuleId === this.filter.module)
            }
        }
    },
    methods: {
        ...mapActions({
            getLevels: 'getLevels',
            getModules: 'fetchModules',
            getSubtests: 'fetchSubtests',
            getQuestionBases: 'fetchQuestionBases',
            createNewQuestionBase: 'addNewQuestionBase',
            editQuestionBase: 'editQuestionBase',
            setCurrentQuestionBase: 'setSelectedQuestionBase',
            deleteQuestionBase: 'deleteQuestionBase'
        }),
        async searchQuestions() {
            await this.getQuestionBases(this.filter)
        },
        async resetFilters() {
            this.filter = {
                name: '',
                level: '',
                module: '',
                subtest: '',
                status: '',
                page: 1,
                pageSize: this.defaultPaging.pageSize
            }
            await this.getQuestionBases(this.filter)
        },
        async addNewQuestionBase() {
            const result = await this.v$.$validate();
            if (result) {
                this.isEdit ?
                await this.editQuestionBase(this.newQuestionBase) :
                await this.createNewQuestionBase(this.newQuestionBase)
                await this.getQuestionBases({})
                this.$Jquery('.popup').hide()
                this.$Jquery('body').removeClass('hide')
                this.isEdit = false;
            }
        },
        selectToEdit(data) {
            this.isEdit = true
            this.newQuestionBase = data
            this.$Jquery('.popup').show()
        },
        addnewItem() {
            this.newQuestionBase = {
                subtest: {
                    examModuleId: '',
                    examModule: {
                        examLevelId: ''
                    }
                },
                subtestId: ''
            }
        },
        async onPageChange(page) {
            this.filter.page = page
            this.filter.pageSize = this.defaultPaging.pageSize
            await this.getQuestionBases(this.filter)
            this.currentPage = page
        },
        async deleteItem(questionBase) {
            const result = await this.Swal.fire(this.getSwalDeleteDialog.prompt)
            if (result.isConfirmed) {
                await this.deleteQuestionBase(questionBase.id)
                await this.onPageChange(this.currentPage)
                this.Swal.fire(this.getSwalDeleteDialog.successDelete)
            }
        },
        subtestType(val) {
            return this.subtestTypes.filter(x => x.key == val)[0].value
        }
    },
    watch: {
        'newQuestionBase.subtest.examModule.examLevelId': function (_, oldVal) {
            if (!oldVal) {
                this.newQuestionBase.subtest.examModuleId = ''
                this.newQuestionBase.subtestId = ''
            }
        },
        'newQuestionBase.subtest.examModuleId': function (_, oldVal) {
            if (!oldVal) {
                this.newQuestionBase.subtestId = ''
            }
        },
        'filter.level': function () {
            this.filter.module = '';
        },
        'filter.module': function () {
            this.filter.subtest = '';
        }
    }
}
</script>

<style lang="scss" scoped></style>