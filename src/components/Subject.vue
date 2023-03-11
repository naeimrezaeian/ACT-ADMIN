<template>
    <div class="wrapper">
        <div class="head mini">
            <h1>СУБТЕСТЫ</h1>
            <div class="bot">
                <router-link to="Subjects/Add" class="add">Создать субтест</router-link>
            </div>
        </div>
        <div class="serch">
            <form>
                <div class="box">
                    <input type="text" class="serch_in" v-model="filter.name" placeholder="Поиск по названию">
                    <span class="lup"></span>
                    <button type="button" class="btn" @click="searchSubtests">Поиск</button>
                </div>
                <div class="box">
                    <select v-model="filter.examLevelId">
                        <option value="" disabled selected>Выбрать уровень</option>
                        <option v-for="item in levels" :key="item.id" :value="item.id">{{ item.title }}</option>
                    </select>
                    <select v-model="filter.examModuleId">
                        <option value="" disabled selected>Выбрать модуль</option>
                        <option v-for="item in modules" :key="item.id" :value="item.id">{{ item.title }}</option>
                    </select>
                    <select v-model="filter.status">
                        <option value="" disabled selected>Выбрать статус</option>
                        <option v-for="item in statuses" :key="item.key" :value="item.key">{{ item.value }}</option>
                    </select>
                    <div class="bot">
                        <button type="button" class="rezet" @click="resetFilters">Сбросить фильтры</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="grup_test">
            <div class="panel">
                <div class="left">
                    <div class="chek">
                        <input type="checkbox" id="all" v-model="selectAllSubtests" class="checkbox">
                        <label for="all">Выбрать все</label>
                    </div>
                    <button type="button" class="delete" @click="deleteSelectedItems">Удалить выбранные</button>

                </div>
            </div>
            <div class="table">
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Название субтест</th>
                            <th>Уровень</th>
                            <th>Модуль</th>
                            <th>Дата создания</th>
                            <th>Создатель</th>
                            <th>Статус</th>
                        </tr>
                        <tr v-for="item in subtests" :key="item.id">
                            <td>
                                <input type="checkbox" :id="item.id" v-model="item.isSelected" class="checkbox">
                                <label :for="item.id"></label>
                            </td>
                            <td>
                                <button class="link" @click="editSubtest(item)">{{ item.title }}</button>
                            </td>
                            <td>{{ item.examModule.examLevel.title }}</td>
                            <td>{{ item.examModule.title }}</td>
                            <td>{{ item.createdDate }}</td>
                            <td>{{ item.createdBy.name + ' ' + item.createdBy.family }}</td>
                            <td>{{ item.status }}</td>
                        </tr>

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
import router from '@/router';
import { mapActions, mapGetters } from 'vuex';
import ActPagination from './elementComponents/ActPagination.vue';
export default {
    name: "AdminSubject",
    components: {
        ActPagination
    },
    data() {
        return {
            filter: {
                name: '',
                examModuleId: '',
                examLevelId: '',
                status: '',
                page: 1,
            },
            currentPage: 1,
            selectAll:false
        }
    },
    async mounted() {
        await this.fetchSubtests({ page: 1, pageSize: this.defaultPaging.pageSize })
        await this.fetchLevels({})
        await this.fetchModules({})
    },
    methods: {
        ...mapActions({
            fetchSubtests: 'fetchSubtests',
            fetchLevels: 'getLevels',
            fetchModules: 'fetchModules',
            setEditSubtest: 'setEditSubtest',
            deleteSubtests: 'deleteSubtests'
        }),
        async searchSubtests() {
            this.filter.page = 1
            this.filter.pageSize = this.defaultPaging.pageSize
            await this.fetchSubtests(this.filter)
        },
        async resetFilters() {
            this.filter = { page: 1, pageSize: this.defaultPaging.pageSize }
            await this.fetchSubtests(this.filter)
        },
        editSubtest(data) {
            this.setEditSubtest(data)
            router.push('/Subjects/Edit')
        },
        async onPageChange(page) {
            this.filter.page = page
            this.filter.pageSize = this.defaultPaging.pageSize
            await this.fetchSubtests(this.filter)
            this.currentPage = page
        },
        async deleteSelectedItems() {
            const selectedItems = this.subtests.filter(x => x.isSelected).map(x => x.id)
            if (selectedItems && selectedItems.length) {
                const result = await this.Swal.fire(this.getSwalDeleteDialog.prompt)
                if (result.isConfirmed) {
                    await this.deleteSubtests(selectedItems)
                    await this.onPageChange(this.currentPage)
                    this.Swal.fire(this.getSwalDeleteDialog.successDelete)
                }

            }

        }
    },
    computed: {
        ...mapGetters({
            subtests: 'getSubtests',
            modules: 'getModules',
            levels: 'getExamLevels',
            statuses: 'getStatusField',
            defaultPaging: 'getDefaultPaging',
            paging: 'getPaging',
            getSwalDeleteDialog:'getSwalDeleteDialog'
        }),
        selectAllSubtests:{
            get(){
                return this.selectAll
            },
            set(newVal){
                this.selectAll=newVal
                this.subtests.forEach(item=>{
                    item.isSelected=newVal
                })
            }
        }
    }

}
</script>

<style lang="scss" scoped></style>