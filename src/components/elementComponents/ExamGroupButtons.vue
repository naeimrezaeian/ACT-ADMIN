<template>
    <template v-if="examGroup.status == getExamStatus[0].key">
        <button type="button" class="def" @click="downloadStudentListFile">Скачать список студентов</button>
        <button type="button" class="btn" @click="doneBranchExam">
            Отправить окончательно
        </button>
        <button type="button" class="add show_popup" rel="editStudentPopup" @click="addUser(examGroup)">
            Добавить пользователя
        </button>
    </template>
    <template v-if="examGroup.status == getExamStatus[1].key"> <button type="button" class="def">Загрузить акт</button>
        <button type="button" class="def">Печать акта</button>
        <button type="button" class="def">
            Печать сводной таблицы
        </button>
        <button type="button" class="btn" @click="doneBranchExam">
            Отправить окончательно
        </button></template>
    <template v-if="examGroup.status == getExamStatus[2].key">
        <button type="button" class="def" @click="downloadStudentListFile">Протокол</button>
        <button type="button" class="def" @click="downloadListFile">Список</button>
        <!-- <button type="button" class="def">Загрузить акт</button>
        <button type="button" class="def">
            Печать сводной таблицы
        </button> -->
        <button type="button" class="dise" @click="sendBranchExamToArchive">Архивировать</button>
    </template>
    <template v-if="examGroup.status == getExamStatus[3].key">
        <button type="button" class="def">Загрузить акт</button>
        <button type="button" class="def">Печать акта</button>
        <button type="button" class="def">
            Печать сводной таблицы
        </button>
    </template>
    <template v-if="examGroup.status == getExamStatus[4].key">
    </template>
    <template v-if="examGroup.status == getExamStatus[5].key">
        <!-- <button type="button" class="def">Печать акта</button>
        <button type="button" class="def">
            Печать сводной таблицы
        </button>
        <button type="button" class="btn">
            Отправить окончательно
        </button> -->
    </template>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    props: {
        examGroup: {
            type: Object,
            required: true,
        }

    },
    computed: {
        ...mapGetters({
            getExamStatus: 'getExamStatus',
            getSwalDeleteDialog: 'getSwalDeleteDialog'
        }),
    },
    methods: {
        ...mapActions({
            changeEditStudentPopup: 'setShowEditStudentPopup',
            getProtocolFile: 'downloadProtocolFile',
            getListFile: 'downloadListFile',
            getStudentListFile: 'downloadStudentListFile',
            setBranchExamAsDone: 'setBranchExamAsDone',
            archiveBranchExam: 'archiveBranchExam',
        }),
        addUser(group) {
            this.changeEditStudentPopup({ show: true, student: {}, group })
        },
        async doneBranchExam() {
            const result = await this.Swal.fire(this.getSwalDeleteDialog.branchExamDonePrompt)
            if (result.isConfirmed) {
                await this.setBranchExamAsDone(this.examGroup.id)
            }
        },
        async sendBranchExamToArchive() {
            const result = await this.Swal.fire(this.getSwalDeleteDialog.prompt);
            if (result.isConfirmed) {
                await this.archiveBranchExam(this.examGroup.id);
            }
        },
        async downloadProtocolFile() {
            let result = await this.getProtocolFile(this.examGroup.id);
            let blob = new Blob([result.data], { type: 'application/pdf' });
            let url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `protocol-${this.examGroup.examLevel.title}-${this.examGroup.id}.pdf`;
            link.click();
            URL.revokeObjectURL(url);
        },
        async downloadListFile() {
            let result = await this.getListFile(this.examGroup.id);
            let blob = new Blob([result.data], { type: 'application/pdf' });
            let url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `list-${this.examGroup.examLevel.title}-${this.examGroup.id}.pdf`
            link.click();
            URL.revokeObjectURL(url);
        },
        async downloadStudentListFile() {
            let result = await this.getStudentListFile(this.examGroup.id);
            let blob = new Blob([result.data], { type: 'application/pdf' });
            let url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `list-${this.examGroup.examLevel.title}-${this.examGroup.id}.pdf`
            link.click();
            URL.revokeObjectURL(url);
        }
    }
}
</script>
