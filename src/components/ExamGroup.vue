<template>
    <div class="doc_fil">
        <div class="doc_svo">
            <div class="info">
                <div class="name">{{ examGroup.examLevel.title }}</div>
                <div :class="examGroupStatus.cssClass">
                    <span>{{ examGroupStatus.value }}</span>
                    <span class="nomer">№ {{ examGroup.examCode }}</span>
                    <span v-if="examGroup.status != getExamStatus[4].key && examGroup.status != getExamStatus[5].key"
                        class="delete" @click="deleteBranchExam"></span>
                </div>

            </div>
            <div id="svo-6">
                <div class="box">
                    <div class="item">
                        <ul>
                            <li><span>Ответственный:</span> {{ examGroup.responsible.fullName }}</li>
                            <li><span>Дата проведения:</span> {{ new Date(examGroup.examDate).toLocaleDateString() }}</li>
                            <li><span>Кол-во тестируемых:</span> {{ examGroup.userExamLevels.length }}</li>
                        </ul>
                    </div>
                    <div class="coment">
                        <div class="name">Комменатрий</div>
                        <div class="text">{{ examGroup.comment }}</div>
                    </div>
                </div>
                <div :id="`svo-${examGroup.id}`">
                    <div class="bot bots">
                        <ExamGroupButtons :examGroup="examGroup" />
                    </div>
                    <div class="table">
                        <table>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>ФИО</th>
                                    <th>Уровень</th>
                                    <th>Национальность</th>
                                    <th>Миграционная карта</th>
                                    <th>Статус</th>
                                    <th></th>
                                </tr>
                                <template v-for="user in examGroup.userExamLevels" :key="user.id">
                                    <tr @click="toggleUserMetrica(`g1user-${user.id}`)">
                                        <td>{{ user.user.username }}</td>
                                        <td>{{ user.user.fullName }}</td>
                                        <td>{{ examGroup.examLevel.title }}</td>
                                        <td>{{ user.user.nationality }}</td>
                                        <td>{{ user.user.migrationCard }}</td>
                                        <td>{{ getUserExamStatus(user.status) }}</td>
                                        <td><span
                                                v-if="examGroup.status != getExamStatus[4].key && examGroup.status != getExamStatus[5].key"
                                                class="delete" @click.prevent="deleteStudent(user.user)"></span></td>
                                    </tr>
                                    <tr>
                                        <td colspan="6" class="non-pading">
                                            <AdminCandidateMetrica :metricId="`g1user-${user.id}`" :examGroup="examGroup"
                                                :student="user" />
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <button class="calaps" @click="toggleUsers">
            Свернуть
        </button>
    </div>
</template>
<script>
import AdminCandidateMetrica from "./elementComponents/CandidateMetrica.vue";
import ExamGroupButtons from "./elementComponents/ExamGroupButtons.vue";
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "ExamGroup",
    components: {
        AdminCandidateMetrica,
        ExamGroupButtons,
    },
    props: {
        examGroup: {
            type: Object,
            required: true,
        }
    },
    computed: {

        examGroupStatus() {
            return this.getExamStatus.find((item) => item.key === this.examGroup.status);
        },
        ...mapGetters({
            getExamStatus: 'getExamStatus',
            userExamStatus: 'getUserExamStatus',
            getSwalDeleteDialog: 'getSwalDeleteDialog',
        }),
    },
    methods: {
        ...mapActions({
            setSelectedGroup: 'setSelectedBranchExam',
            deleteExamGroup: 'deleteBranchExam',
            deleteStudentFromBranchExam: 'deleteStudentFromBranchExam',
            getAllStudents: 'getAllStudents',
        }),
        toggleUsers() {
            this.$Jquery(`#svo-${this.examGroup.id}`).slideToggle()
        },
        toggleUserMetrica(id) {
            this.$Jquery(`#${id}`).slideToggle()
        },
        async deleteBranchExam() {
            const result = await this.Swal.fire(this.getSwalDeleteDialog.prompt);
            if (result.isConfirmed) {
                await this.deleteExamGroup(this.examGroup.id);
            }
        },

        getUserExamStatus(status) {
            return this.userExamStatus.find((item) => item.key === status)?.value;
        },
        async deleteStudent(student) {
            const result = await this.Swal.fire(this.getSwalDeleteDialog.prompt);
            if (result.isConfirmed) {
                await this.deleteStudentFromBranchExam(student.id);
                await this.getAllStudents({ groupId: this.examGroup.id });
            }
        },
    },
};
</script>