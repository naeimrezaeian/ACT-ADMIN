<template>
    <div class="wrapper">
        <div class="head filial">
            <h1>ФИЛИАЛЫ</h1>
            <div class="bot">
                <router-link :to="{ path: 'Branches/Add' }" class="add">Добавить филиал</router-link>
            </div>
        </div>
        <div class="serch">
            <form>
                <div class="box">
                    <input type="text" placeholder="Выбрать период" onfocus="(this.type='date')" class="dats">
                    <select>
                        <option value="" disabled selected>Выбрать город</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <select>
                        <option value="" disabled selected>Выбрать ответственного</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div class="box">
                    <input type="text" class="serch_in" value="" placeholder="Напишите запрос для поиска или код филиала">
                    <span class="lup"></span>
                    <button type="button" class="btn">Поиск</button>
                </div>
            </form>
        </div>
        <div class="vopros">
            <div class="table filials">
                <table>
                    <tbody>
                        <tr>
                            <th>Код филиала</th>
                            <th>Название</th>
                            <th>Ответственный</th>
                            <th>Город</th>
                            <th>Контакты</th>
                        </tr>
                        <tr v-for="item in allBranches" :key="item.id">
                            <td>{{item.branchCode}}</td>
                            <td>
                                <router-link :to="`Branches/${item.id}`" @click="setBranchToView(item)" >{{item.name}}</router-link>
                            </td>
                            <td>{{item.admin}}</td>
                            <td>{{item.city}}</td>
                            <td>{{item.tin}}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <ActPagination :totalPages="paging.totalPages" :perPage="this.defaultPaging.pageSize" :currentPage="currentPage"
                :maxVisibleButtons="this.defaultPaging.maxVisibleButtons" @pagechanged="onPageChange" />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ActPagination from './elementComponents/ActPagination.vue'
export default {
    name: "AdminBranches",
    data() {
        return {
            currentPage:1,
        }
    },
    async mounted() {
        await this.getBranches({ page: 1, pageSize: this.defaultPaging.pageSize })
    },
    components: {
        ActPagination
    },
    computed: {
        ...mapGetters({ allBranches: 'getBranchList', defaultPaging: 'getDefaultPaging', paging: 'getPaging' }),
    },
    methods: {
        ...mapActions({ getBranches: 'fetchBranches',setBranchToView:'setBranchToView' }),
        async onPageChange(page) {
            await this.getBranches({ page: page, pageSize: this.defaultPaging.pageSize })
            this.currentPage=page
        }
    },
}



</script>

<style lang="scss" scoped></style>