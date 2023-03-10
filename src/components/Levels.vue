<template>
    <div class="wrapper">
        <div class="head">
            <h1>УРОВНИ</h1>
            <div class="bot">
                <router-link to="Levels/Add" class="add">Создать уровень</router-link>
            </div>
        </div>

        <div class="articl levellist">
            <div class="box">
                <LevelShowBox v-for="item in examLevels" :key="item.id" :examLevel="item" />
            </div>
            <ActPagination :totalPages="paging.totalPages" :perPage="this.defaultPaging.pageSize" :currentPage="currentPage"
                :maxVisibleButtons="this.defaultPaging.maxVisibleButtons" @pagechanged="onPageChange" />
        </div>
    </div>

    <div class="popup" id="popup1">
        <LevelPopupDesc />
    </div>
</template>


<script>
import LevelShowBox from './elementComponents/LevelShowBox.vue'
import LevelPopupDesc from './elementComponents/LevelPopupDesc.vue'
import ActPagination from './elementComponents/ActPagination.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "AdminLevels",
    components: {
        LevelShowBox,
        LevelPopupDesc,
        ActPagination
    },
    data() {
        return{
            currentPage:1,
        }
    },
    computed: {
        ...mapGetters({ examLevels: 'getExamLevels', defaultPaging: 'getDefaultPaging', paging: 'getPaging' })
    },
    methods: {
        ...mapActions({ fetchLevels: 'getLevels' }),
        async onPageChange(page) {
            await this.fetchLevels({ page: page, pageSize: this.defaultPaging.pageSize })
            this.currentPage=page
        }
    },
    mounted() {
        this.fetchLevels({ page: 1, pageSize: this.defaultPaging.pageSize })
        let self = this
        this.$Jquery('.clouse').click(function () {
            self.$Jquery('.popup').hide();
            self.$Jquery('body').removeClass('hide');
        })


    }
}
</script>

<style lang="scss" scoped></style>