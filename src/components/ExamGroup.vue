<template>
    <div class="doc_fil">
        <div class="doc_svo">
            <div class="info">
                <div class="name">{{ examGroup.examLevel.title }}</div>
                <div :class="examGroupStatus.cssClass">
                    <span>{{ examGroupStatus.value }}</span>
                    <span class="nomer">№ {{ examGroup.examCode }}</span>
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
                        <button type="button" class="def">Протокол</button>
                        <button type="button" class="def">Список</button>
                        <button type="button" class="add show_popup" rel="editStudentPopup" @click="addUser(examGroup)">
                            Добавить пользователя
                        </button>
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
                                </tr>
                                <template v-for="user in examGroup.userExamLevels" :key="user.id">
                                    <tr @click="toggleUserMetrica(`g1user-${user.id}`)">
                                        <td>{{ user.user.username }}</td>
                                        <td>{{ user.user.fullName }}</td>
                                        <td>{{ examGroup.examLevel.title }}</td>
                                        <td>{{ user.user.nationality }}</td>
                                        <td>{{ user.user.migrationCard }}</td>
                                        <td>{{ userExamStatus.value }}</td>
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
//import EditStudentPopup from "./elementComponents/EditStudent.vue";
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "ExamGroup",
    components: {
        AdminCandidateMetrica,
        //      EditStudentPopup,
    },
    props: {
        examGroup: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            showAddUser: false,
        }
    },
    computed: {

        examGroupStatus() {
            return this.getExamStatus.find((item) => item.key === this.examGroup.status);
        },
        userExamStatus() {
            return this.userExamStatus.find((item) => item.key === this.examGroup.status);
        },
        ...mapGetters({ getExamStatus: 'getExamStatus', userExamStatus: 'getUserExamStatus' }),
    },
    methods: {
        ...mapActions({ setSelectedGroup: 'setSelectedBranchExam', changeEditStudentPopup: 'setShowEditStudentPopup' }),
        toggleUsers() {
            this.$Jquery(`#svo-${this.examGroup.id}`).slideToggle()
        },
        toggleUserMetrica(id) {
            this.$Jquery(`#${id}`).slideToggle()
        },
        addUser(group) {
            this.changeEditStudentPopup({ show: true, student: {}, group })
        }
    },
};
</script>