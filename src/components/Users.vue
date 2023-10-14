<template>
    <div class="wrapper">

        <div class="head filial">
            <h1>ПОЛЬЗОВАТЕЛИ</h1>
            <div class="botuser">
                <router-link :to="{ path: 'Users/Add' }" class="add">Добавить пользователя </router-link>
            </div>
        </div>
        <div class="serch">
            <form>
                <div class="box">
                    <select v-model="filter.status">
                        <option value="" disabled selected>Выбрать статус</option>
                        <option v-for="item in statusTypes" :key="item.key" :value="item.key">{{ item.value }}</option>
                    </select>
                    <input type="text" class="inputFilter" placeholder="Выбрать город" v-model="filter.city">
                    <select v-model="filter.branch">
                        <option value="" disabled selected>Выбрать филиал</option>
                        <option v-for="item in branches" :key="item.id" :value="item.id">{{ item.branchCode + '-' +
                            item.name }}</option>
                    </select>
                </div>
                <div class="box">
                    <input type="text" class="serch_in" placeholder="Поиск по фамилии" v-model="filter.name">
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
                            <th>ФИО</th>
                            <th>Город</th>
                            <th>Филиал</th>
                            <th>email</th>
                            <th>Роль в системе</th>
                            <th>Статус </th>
                        </tr>
                        <tr v-for="item in adminUsers" :key="item.id">
                            <td>
                                <router-link :to="`Users/Edit`" @click="editUser(item)">{{ item.fullname }}</router-link>
                            </td>
                            <td>{{ item.city }}</td>
                            <td v-if="item.role == adminRoleTypes[0].key">-</td>
                            <td v-else>{{ item.branchSystemUsers[0]?.branchName }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ adminRoleTypes.find(x => x.key === item.role)?.value }}</td>
                            <td>{{ statusTypes.find(x => x.key === item.status)?.value }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <act-pagination :totalPages="paging.totalPages" :perPage="this.defaultPaging.pageSize"
                :currentPage="filter.currentPage" :maxVisibleButtons="this.defaultPaging.maxVisibleButtons"
                @pagechanged="onPageChange" />

        </div>

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ActPagination from './elementComponents/ActPagination.vue';
export default {
    name: 'AdminUsers',
    components: {
        ActPagination
    },
    data() {
        return {
            filter: {
                status: '',
                city: '',
                branch: '',
                name: '',
                currentPage: 1
            }
        }
    },
    async mounted() {
        await this.getAllBranches()
        await this.getAdminUsers({ page: 1, pageSize: this.defaultPaging.pageSize })
    },
    methods: {
        ...mapActions({ fetchAllRoles: 'getAllRoles', getAllBranches: 'fetchSimplifiedBranches', getAdminUsers: 'getAllAdminUsers', setUserToEdit: 'setUserToEdit' }),
        async search() {
            await this.getAdminUsers({ page: this.filter.currentPage, pageSize: this.defaultPaging.pageSize, ...this.filter })
        },
        async onPageChange(page) {
            await this.getAdminUsers({ page: page, pageSize: this.defaultPaging.pageSize, ...this.filter })
            this.filter.currentPage = page
        },
        editUser(user) {
            this.setUserToEdit(user)
        }

    },
    computed: {
        ...mapGetters({
            allRoles: 'getAllRoles', branches: 'getSimplifiedBranches', statusTypes: 'getStatusField', adminUsers: 'getAdminUsers', defaultPaging: 'getDefaultPaging',
            paging: 'getPaging', adminRoleTypes: 'getBranchUserType'
        })
    }
}
</script>

<style lang="scss" scoped></style>