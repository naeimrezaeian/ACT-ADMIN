<template>
    <div class="wrapper">
        <div class="head mini">
            <h1>МОДУЛИ</h1>
            <div class="bot">
                <router-link to="Module/Add" class="add">Создать модуль</router-link>
            </div>
        </div>
        <div class="serch">
            <form>
                <div class="box">
                    <input type="text" class="serch_in" v-model="filter.moduleName" placeholder="Поиск по названию">
                    <span class="lup"></span>
                    <button type="button" class="btn" @click="searchModules">Поиск</button>
                </div>
                <div class="box">
                    <select v-model="filter.level">
                        <option value="" disabled selected>Выбрать уровень</option>
                        <option v-for="({ id, title }, index) in levels" :key="index" :value="id">{{ title }}</option>

                    </select>
                    <select v-model="filter.status">
                        <option value="" disabled selected>Выбрать статус</option>
                        <option v-for="({ key, value }, index) in statuses" :key="index" :value="key">{{ value }}
                        </option>
                    </select>
                    <div class="bot">
                        <button type="button" class="rezet" @click="resetFilter">Сбросить фильтры</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="grup_test">
            <div class="panel">
                <div class="left">
                    <div class="chek">
                        <input type="checkbox" id="all" v-model="selectAllModules" class="checkbox">
                        <label for="all">Выбрать все</label>
                    </div>
                    <button type="button" class="delete" @click="deleteSelectedItems">Удалить выбранные</button>
                    <button type="button" class="arhiv">Архивировать</button>
                </div>
            </div>
            <div class="table">
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Название модуля</th>
                            <th>Уровень</th>
                            <th>Дата создания</th>
                            <th>Создатель</th>
                            <th>Описание</th>
                            <th>Статус</th>
                        </tr>
                        <tr v-for="item in modules" :key="item.id">
                            <td>
                                <input type="checkbox" :id="item.id" v-model="item.isSelected" class="checkbox">
                                <label :for="item.id"></label>
                            </td>
                            <td>
                                <button class="link" @click="editModule(item)">{{ item.title }}</button>
                            </td>
                            <td>{{ item.examLevel.title }}</td>
                            <td>{{ item.date }}</td>
                            <td>{{ item.createdBy.name + ' ' + item.createdBy.family }}</td>
                            <td v-html="item.description"></td>
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
    name: "AdminModule",
    components: {
        ActPagination
    },
    data() {
        return {
            filter: {
                level: '',
                status: '',
                moduleName: '',
                page: 1,
            },
            currentPage: 1,
            selectAll:false
        }
    },
    mounted() {
        this.fetchModules({
            level: this.filter.level || null,
            status: this.filter.status || null,
            moduleName: this.filter.moduleName || null,
            page: 1,
            pageSize: this.defaultPaging.pageSize

        })
        this.fetchLevels({})
    },
    methods: {
        ...mapActions({
            fetchModules: 'fetchModules',
            fetchLevels: 'getLevels',
            setModuleToEdit: 'setModuleToEdit',
            deleteExamModules: 'deleteExamModules'
        }),
        editModule(item) {
            this.setModuleToEdit(item)
            router.push('/Module/Edit')
        },
        async searchModules() {
            await this.fetchModules({
                level: this.filter.level || null,
                status: this.filter.status || null,
                moduleName: this.filter.moduleName || null,
                page: 1,
                pageSize: this.defaultPaging.pageSize
            })
        },
        async resetFilter() {
            this.filter = { page: 1, pageSize: this.defaultPaging.pageSize }
            await this.fetchModules(this.filter)
        },
        async onPageChange(page) {
            await this.fetchModules({
                level: this.filter.level || null,
                status: this.filter.status || null,
                moduleName: this.filter.moduleName || null,
                page: page,
                pageSize: this.defaultPaging.pageSize

            })
            this.currentPage = page
        },
        async deleteSelectedItems() {
            const selectedItems= this.modules.filter(x => x.isSelected).map(x => x.id)
            if (selectedItems && selectedItems.length) {
                const result = await this.Swal.fire(this.getSwalDeleteDialog.prompt)
                if (result.isConfirmed) {
                    await this.deleteExamModules(selectedItems)
                    await this.onPageChange(this.currentPage)
                    this.Swal.fire(this.getSwalDeleteDialog.successDelete)
                }

            }

        }
    },
    computed: {
        ...mapGetters({
            statuses: 'getStatusField',
            levels: 'getExamLevels',
            modules: 'getModules',
            defaultPaging: 'getDefaultPaging',
            paging: 'getPaging',
            getSwalDeleteDialog:'getSwalDeleteDialog'
        }),
        selectAllModules:{
            get(){
                return this.selectAll
            },
            set(newVal){
                this.selectAll=newVal
                this.modules.forEach(element => {
                    element.isSelected=newVal
                });
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>