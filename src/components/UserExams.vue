<template>
    <div class="wrapper">
        <div class="head filial">
            <h1>ПРОВЕРКА</h1>
        </div>
        <div class="serch">
            <form>
                <div class="box">
                    <input type="text" v-model="filter.period" placeholder="Выбрать период" onfocus="(this.type='date')" class="dats">
                    <input type="text" v-model="filter.city" placeholder="Выбрать город" class="inputFilter">
                    <select v-model="filter.resposibleId">
                        <option value="" disabled selected>Выбрать уровень</option>
                        <!-- <option value="" v-if=".length > 0">{{ allForDropdowns }}</option>
                        <option v-for="item in " :key="item.key" :value="item.key">{{ item. }}</option> -->
                    </select>
                    <select v-model="filter.resposibleId">
                        <option value="" disabled selected>Гражданство</option>
                        <!-- <option value="" v-if=".length > 0">{{ allForDropdowns }}</option>
                        <option v-for="item in " :key="item.key" :value="item.key">{{ item. }}</option> -->
                    </select>
                    <select v-model="filter.resposibleId">
                        <option value="" disabled selected>Выбрать статус</option>
                        <!-- <option value="" v-if=".length > 0">{{ allForDropdowns }}</option>
                        <option v-for="item in " :key="item.key" :value="item.key">{{ item. }}</option> -->
                    </select>
                    <div class="bot">
                        <button type="button" class="rezet" @click="resetFilters()">Сбросить фильтры</button>
                    </div>
                </div>
                <div class="box">
                    <input type="text" class="serch_in" v-model="filter.name" placeholder="Напишите запрос для поиска или код филиала">
                    <span class="lup"></span>
                    <button type="button" class="btn" @click="searchBranches()">Поиск</button>
                </div>
            </form>
        </div>
        <div class="vopros">
            <div class="table filials">
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>ФИО</th>
                            <th>Уровень</th>
                            <th>Национальность</th>
                            <th>Город</th>
                            <th>Статус</th>
                            <th>Контакты</th>
                        </tr>
                        <!-- <tr v-for="item in " :key="item.id">
                            <td>{{item.}}</td>
                            <td>
                                <router-link :to="``" @click="(item)" >{{item.name}}</router-link>
                            </td>
                            <td>{{item.}}</td>
                            <td>{{item.}}</td>
                            <td>{{item.}}</td>
                            <td>{{item.}}</td>
                            <td>{{item.}}</td>
                        </tr> -->
                    </tbody>
                </table>
            </div>
            <!-- <ActPagination :totalPages="paging.totalPages" :perPage="this.defaultPaging.pageSize" :currentPage="currentPage"
                :maxVisibleButtons="this.defaultPaging.maxVisibleButtons" @pagechanged="onPageChange" /> -->
        </div>
    </div>
</template>


<script>
// import ActPagination from './elementComponents/ActPagination.vue'
export default {
    name: "UserExams",
    data() {
        return {
            filter: {
                name: '',
                period: '',
                city: '',
                resposibleId: '',
                page: 1,
            },
            currentPage: 1,
        }
    },
    components: {
        // ActPagination,
    }
}
</script>


<style>
.filial.head+.serch .box select+select {
    max-width: 196px;
}
</style>