<template>
    <div class="wrapper">
        <div class="head filial">
            <h1>ПРОВЕРКА</h1>
        </div>
        <div class="serch">
            <form>
                <div class="box">
                    <input type="text" v-model="filter.period" placeholder="Выбрать период" onfocus="(this.type='date')" class="dats">
                    <select v-model="filter.levelId">
                        <option value="" disabled selected>Выбрать уровень</option>
                        <option value="" v-if="levels.length">{{ allForDropdowns }}</option>
                        <option v-for="item in levels" :key="item.id" :value="item.id">{{ item.title }}</option>
                    </select>
                    <select v-model="filter.moduleId">
                        <option value="" disabled selected>Выбрать модуль</option>
                        <option value="" v-if="filter.levelId && levelModules.length">{{ allForDropdowns }}</option>
                        <option v-for="item in levelModules" :key="item.id" :value="item.id">{{ item.title }}</option>
                    </select>
                    <select v-model="filter.branchId">
                        <option value="" disabled selected>Выбрать филиала</option>
                        <option value="" v-if="allBranches.length">{{ allForDropdowns }}</option>
                        <option v-for="item in allBranches" :key="item.id" :value="item.id">{{ item.name }}</option>
                    </select>
                    <select v-model="filter.status">
                        <option value="" disabled selected>Выбрать статус</option>
                        <option value="" v-if="statuses.length">{{ allForDropdowns }}</option>
                        <option v-for="item in statuses" :key="item.key" :value="item.key">{{ item.value }}</option>
                    </select>
                    <div class="bot">
                        <button type="button" class="rezet" @click="resetFilters()">Сбросить фильтры</button>
                    </div>
                </div>
                <div class="box">
                    <input type="text" class="serch_in" v-model="filter.name" placeholder="Напишите запрос для поиска или код филиала">
                    <span class="lup"></span>
                    <button type="button" class="btn" @click="searchManualCheckSubtests()">Поиск</button>
                </div>
            </form>
        </div>
        <div class="vopros">
            <div class="table filials">
                <table>
                    <tbody>
                        <tr>
                            <th class="id">ID</th>
                            <th>ФИО</th>
                            <th>Национальность</th>
                            <th>Уровень</th>
                            <th>филиала</th>
                            <th>Статус</th>
                        </tr>
                        <tr v-for="item in getManualCheckSubtests" :key="item.id">
                            <td>{{ item.userExamLevel.user.username }}</td>
                            <td>
                                <router-link :to="`UserExams/${item.userExamLevel.user.id}`" @click="setUserExamToShow(item)" >{{ item.userExamLevel.user.fullName }}</router-link>
                            </td>
                            <td>{{ item.userExamLevel.user.nationality }}</td>
                            <td>{{ item.subtest.examModule.examLevel.title }}</td>
                            <td>{{ item.userExamLevel.branchExam.branchTitle }}</td>
                            <td>{{ returnStatus(item.status) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ActPagination :totalPages="paging.totalPages" :perPage="defaultPaging.pageSize" :currentPage="currentPage"
                :maxVisibleButtons="defaultPaging.maxVisibleButtons" @pagechanged="onPageChange" />
        </div>
    </div>
</template>


<script>
import ActPagination from './elementComponents/ActPagination.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "UserExams",
    data() {
        return {
            filter: {
                name: '',
                period: '',
                levelId: '',
                moduleId: '',
                branchId: '',
                status: '',
                page: 1,
            },
            currentPage: 1,
        }
    },
    components: {
        ActPagination,
    },
    async mounted() {
        await this.getBranches({});
        await this.fetchLevels({});
        await this.fetchModules({});
        await this.manualCheckSubtests({ page: 1, pageSize: this.defaultPaging.pageSize });
    },
    computed: {
        ...mapGetters({
            getManualCheckSubtests: 'getManualCheckSubtests',
            defaultPaging: 'getDefaultPaging',
            paging: 'getPaging',
            modules: 'getModules',
            levels: 'getExamLevels',
            allForDropdowns: 'getAllForDropdowns',
            statuses: 'getUserExamStatus',
            allBranches: 'getBranchList',
        }),
        levelModules: {
            get() {
                return this.modules.filter(x => x.examLevelId == this.filter.levelId)
            }
        },
    },
    methods: {
        ...mapActions({
            manualCheckSubtests: 'manualCheckSubtests',
            fetchLevels: 'getLevels',
            fetchModules: 'fetchModules',
            getBranches: 'fetchBranches',
            setUserExamToShow: 'setUserExamToShow',
        }),
        async onPageChange(page) {
            await this.manualCheckSubtests({ page: page, pageSize: this.defaultPaging.pageSize });
            this.currentPage = page;
        },
        async searchManualCheckSubtests() {
            await this.manualCheckSubtests(this.filter);
        },
        async resetFilters() {
            this.filter = {
                name: '',
                period: '',
                branchId: '',
                moduleId: '',
                levelId: '',
                status: '',
                page: 1,
            }
            await this.manualCheckSubtests(this.filter);
        },
        returnStatus (userExamStatus) {
            return this.statuses.filter(x => x.key == userExamStatus)[0].value
        }
    },
    watch: {
        'filter.levelId': function () {
            this.filter.moduleId = '';
        },
    },
}
</script>


<style>
.filial.head+.serch .box select {
    max-width: 196px !important;
}
.id {
    width: 140px;
}
</style>