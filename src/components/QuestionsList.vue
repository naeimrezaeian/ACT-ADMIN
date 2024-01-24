<template>
    <div class="wrapper">
        <nav class="bread">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Патент</a></li>
                <li class="breadcrumb-item"><a href="#">{{ getSelectedQuestionBase.subtest.examModule.title }}</a></li>
                <li class="breadcrumb-item"><a href="#">{{ getSelectedQuestionBase.subtest.title }}</a></li>
                <li class="breadcrumb-item active" aria-current="page">Тип вопроса {{ getSelectedQuestionBase.type }}</li>
            </ol>
        </nav>
        <div class="vopros">
            <div class="panel">
                <div class="left">
                    <div class="chek">
                        <input type="checkbox" id="all" v-model="selectAllQuestions" class="checkbox">
                        <label for="all">Выбрать все</label>
                    </div>
                    <button type="button" class="delete" @click="deleteSelectedItems">Удалить выбранные</button>
                </div>
                <router-link :to="{ path: 'Add/' + questionBase?.type ?? '' }" class="add">Добавить вопрос</router-link>
            </div>
            <div class="table">
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Текст вопроса</th>
                            <th>Тип вопроса</th>
                            <th>Статус</th>
                            <th>Вариант</th>
                        </tr>
                        <tr v-for="item in questions" :key="item.id">
                            <td>
                                <input type="checkbox" :id="item.id" v-model="item.isSelected" class="checkbox">
                                <label :for="item.id"></label>
                            </td>
                            <td>
                                <router-link :to="{ path: 'Edit/' + item.type }" @click="setQuestionToEdit(item)" v-html="item?.questionTexts[0]?.questionTitle"></router-link>
                            </td>
                            <td>{{ item.type }}</td>
                            <td>{{ item.status }}</td>
                            <td>
                                <router-link :to="{ path: 'Edit/' + item.type }" @click="setQuestionToEdit(item)" class="edit"></router-link>
                            </td>
                        </tr>
                        <!-- <tr>
                    <td>
                        <input type="checkbox" id="all_2" value="" class="checkbox">
                        <label for="all_2"></label>
                    </td>
                    <td>
                        
                    </td>
                    <td>Видео</td>
                    <td>в архиве</td>
                    <td>
                        <button type="button" class="edit"></button>
                        <button type="button" class="remove"></button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" id="all_3" value="" class="checkbox">
                        <label for="all_3"></label>
                    </td>
                    <td>
                        <router-link to="Add/Letter">Вопрос 3. Продолжение текста вопроса, возможно длинное, может быть даже в две строки</router-link>
                    </td>
                    <td>Письмо</td>
                    <td>активно</td>
                    <td>
                        <button type="button" class="edit"></button>
                        <button type="button" class="remove"></button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" id="all_4" value="" class="checkbox">
                        <label for="all_4"></label>
                    </td>
                    <td>
                        <router-link to="Add/Select">Вопрос 4. Продолжение текста вопроса, возможно длинное, может быть даже в две строки</router-link>
                    </td>
                    <td>Выбор варианта ответа</td>
                    <td>активно</td>
                    <td>
                        <button type="button" class="edit"></button>
                        <button type="button" class="remove"></button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" id="all_5" value="" class="checkbox">
                        <label for="all_5"></label>
                    </td>
                    <td>
                        <router-link to="Add/Select">Вопрос 5. Короткий вопрос в одну строку как образец</router-link>
                    </td>
                    <td>Выбор варианта ответа</td>
                    <td>неактивно</td>
                    <td>
                        <button type="button" class="edit"></button>
                        <button type="button" class="remove"></button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" id="all_6" value="" class="checkbox">
                        <label for="all_6"></label>
                    </td>
                    <td>
                        <router-link to="Add/Audio">Вопрос 6. Короткий вопрос в одну строку как образец</router-link>
                    </td>
                    <td>Выбор варианта ответа</td>
                    <td>неактивно</td>
                    <td>
                        <button type="button" class="edit"></button>
                        <button type="button" class="remove"></button>
                    </td>
                </tr> -->
                    </tbody>
                </table>
            </div>
            <act-pagination :totalPages="paging.totalPages" :perPage="this.defaultPaging.pageSize"
                :currentPage="currentPage" :maxVisibleButtons="this.defaultPaging.maxVisibleButtons"
                @pagechanged="onPageChange" />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ActPagination from './elementComponents/ActPagination.vue';

export default {
    name: "AdminQuestionsList",
    components: {
        ActPagination
    },
    data() {
        return {
            questionBase: null,
            currentPage: 1,
            selectAll:false
        }
    },
    async mounted() {
        this.questionBase = this.getSelectedQuestionBase
        await this.getQuestions({ page: 1, pageSize: this.defaultPaging.pageSize, questionBaseId: this.questionBase.id })
    },
    computed: {
        ...mapGetters({
            questions: 'getQuestions',
            getSelectedQuestionBase: 'getSelectedQuestionBase',
            defaultPaging: 'getDefaultPaging',
            paging: 'getPaging',
            getSwalDeleteDialog:'getSwalDeleteDialog'
        }),
        selectAllQuestions:{
            get(){
                return this.selectAll
            },
            set(newVal){
                this.selectAll=newVal
                this.questions.forEach(element => {
                    element.isSelected=newVal
                });
            }
        },
    },
    methods: {
        ...mapActions({
            getQuestions: 'fetchQuestions',
            setQuestionToEdit: 'setQuestionToEdit',
            deleteQuestions: 'deleteQuestions'
        }),
        async onPageChange(page) {
            await this.getQuestions({ page: page, pageSize: this.defaultPaging.pageSize, questionBaseId: this.questionBase.id })
            this.currentPage = page
        },
        async deleteSelectedItems() {
            const selectedItems = this.questions.filter(x => x.isSelected).map(x => x.id)
            if (selectedItems && selectedItems.length) {
                const result = await this.Swal.fire(this.getSwalDeleteDialog.prompt)
                if (result.isConfirmed) {
                    await this.deleteQuestions(selectedItems)
                    await this.onPageChange(this.currentPage)
                    this.Swal.fire(this.getSwalDeleteDialog.successDelete)
                }

            }

        },
    }
}
</script>

<style lang="scss" scoped></style>