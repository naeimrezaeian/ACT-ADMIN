<template>
    <div class="matrica" :id="metricId">
        <div class="box">
            <div class="left">
                <div class="title">Информация</div>
                <div class="box">
                    <div class="item">
                        <div class="name">ФИО</div>
                        <div class="text">{{ student.user.fullName }}</div>
                    </div>
                    <div class="item">
                        <div class="name">Пол</div>
                        <div class="text">{{ sexType?.value }}</div>
                    </div>
                    <div class="item">
                        <div class="name">Дата рождения</div>
                        <div class="text">{{ student.user.birthDate }}</div>
                    </div>
                    <div class="item">
                        <div class="name">Национальность</div>
                        <div class="text">{{ student.user.nationality }}</div>
                    </div>
                    <div class="item">
                        <div class="name">Город</div>
                        <div class="text">{{ student.user.placeOfBirth }}</div>
                    </div>
                    <div class="item">
                        <div class="name">Документ</div>
                        <div class="text">{{ documentType?.value }}</div>
                    </div>
                    <div class="item">
                        <div class="name">Дата выдачи</div>
                        <div class="text">{{ student.user.issueDate }}</div>
                    </div>
                    <div class="item">
                        <div class="name">Кем выдан</div>
                        <div class="text">{{ student.user.issuedBy }}</div>
                    </div>
                    <div class="item">
                        <div class="name">Миграционная карта</div>
                        <div class="text">{{ student.user.migrationCard }}</div>
                        <!-- <div class="box">
                            <div class="item">
                                <div class="name">Серия</div>
                                <div class="text">4012</div>
                            </div>
                            <div class="item">
                                <div class="name">№</div>
                                <div class="text">302678</div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="box">
                    <div class="title">Матрица результатов</div>
                    <a href="#" class="btn edit show_popup" @click.prevent="editStudent">Редактировать</a>
                </div>
                <div class="table" v-for="item in examResult?.result" :key="item">
                    <table v-if="(examResult?.result[0]?.matrix[0])">
                        <tbody>
                            <tr>
                                <th></th>
                                <th>{{ item.moduleTitle }}</th>
                            </tr>
                            <tr v-for="value in item?.matrix" :key="value"
                                :class="[(item.matrix).indexOf(value) % 2 == 0 ? 'even-row' : 'odd-row']">
                                <td><a href="">{{ value.subtestTitle }}</a></td>
                                <td>{{ value.mark }}</td>
                                <td>{{ value.percentage }}%</td>
                                <td>
                                    <a href="#"> <img src="@/assets/img/icon5.svg" alt=""> </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <button class="calaps" onclick="$('#g1user-1').slideToggle()">Свернуть</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "AdminCandidateMetrica",
    props: {
        metricId: {
            type: String,
            required: true,
        },
        examGroup: {
            type: Object,
            required: true,
        },
        student: {
            type: Object,
            required: true,
        },
    },
    computed: {
        ...mapGetters({
            sexTypes: 'getSexTypes',
            documentTypes: 'getDocumentTypes',
            usersExamResult: 'getUserExamResults'
        }),
        sexType() {
            return this.sexTypes.find((item) => item.key === this.student?.user?.sex);
        },
        documentType() {
            return this.documentTypes.find((item) => item.key === this.student?.user?.document);
        },
        examResult() {
            return this.usersExamResult.find((item) => item.studentId === this.student?.user?.id);
        }
    },
    methods: {
        ...mapActions({
            setSelectedStudent: 'setSelectedStudent',
            changeEditStudentPopup: 'setShowEditStudentPopup',
        }),
        editStudent() {
            this.changeEditStudentPopup({ show: true, student: this.student.user, group: this.examGroup })
        }
    }
}
</script>

<style scoped>
.matrica .box .right table tr:nth-child(2) td,
.matrica .box .right table tr:nth-last-child(2) td {
    background: none !important;
}
.even-row{
    background-color: #fff !important;
}
.odd-row{
    background-color: #E6F0F9 !important;
}
</style>