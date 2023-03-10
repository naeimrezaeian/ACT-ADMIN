<template>
    <div class="item">
        <div class="top_zag">
            <div class="zag">{{ examLevel.title }}</div>
            <button type="button" class="edit" @click="editLevel"></button>
            <button type="button" class="delete" @click="levelDelete"></button>
        </div>
        <ul class="spisok">
            <li>
                <span>Дата создания</span>
                <strong>{{ examLevel.createdOn }}</strong>
            </li>

            <li>
                <span>Составитель</span>
                <strong>{{ examLevel.createdBy.name + ' ' + examLevel.createdBy.family }}</strong>
            </li>

        </ul>
        <a href="#" class="btn show_popup" rel="popup1" @click="showExamLevel">Просмотр</a>
    </div>
</template>

<script>
import router from '@/router';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "AdminLevelShowBox",
    props: {
        examLevel: {
            type: Object,
            required: true,
        },
    },
    computed: {
        ...mapGetters({
            defaultPaging: 'getDefaultPaging',
            paging: 'getPaging',
            getSwalDeleteDialog: 'getSwalDeleteDialog'
        })
    },
    methods: {
        ...mapActions({ setLevel: 'setLevelToShow', setLeveltoEdit: 'setEditLevel', deleteLevel: 'deleteExamLevel', fetchLevels: 'getLevels' }),
        showExamLevel() {
            this.setLevel(this.examLevel)
            this.$Jquery("#popup1").show();
        },
        editLevel() {
            this.setLeveltoEdit(this.examLevel)
            router.push('Levels/Edit')
        },
        async levelDelete() {
            const result = await this.Swal.fire(this.getSwalDeleteDialog.prompt)
            if (result.isConfirmed) {
                await this.deleteLevel(this.examLevel.id)
                await this.fetchLevels({ page: this.paging.currentPage, pageSize: this.defaultPaging.defaultPaging })
                this.Swal.fire(this.getSwalDeleteDialog.successDelete)
            }

        }
    }
}
</script>

<style lang="scss" scoped></style>