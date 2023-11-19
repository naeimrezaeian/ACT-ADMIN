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
                <div class="table">
                    <table>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>Лексика <br>и грамматика</th>
                                <th>Чтение</th>
                                <th>Аудирование</th>
                                <th>Письмо</th>
                                <th>Говорение</th>
                            </tr>
                            <tr>
                                <td>Баллы</td>
                                <td>20</td>
                                <td>30</td>
                                <td>40</td>
                                <td>35</td>
                                <td>60</td>
                            </tr>
                            <tr>
                                <td>Процент</td>
                                <td><b>33%</b></td>
                                <td><b>100%</b></td>
                                <td><b>100%</b></td>
                                <td><b>50%</b></td>
                                <td><b>75%</b></td>
                            </tr>
                            <tr>
                                <td>Максимум</td>
                                <td>60</td>
                                <td>40</td>
                                <td>50</td>
                                <td>70</td>
                                <td>80</td>
                            </tr>
                            <tr>
                                <td>Порог</td>
                                <td>50</td>
                                <td>30</td>
                                <td>40</td>
                                <td>55</td>
                                <td>45</td>
                            </tr>
                            <tr>
                                <td><a href="#">Посмотреть ответы</a></td>
                                <td><a href="#"><img src="@/assets/img/icon5.svg" alt=""></a></td>
                                <td><a href="#"><img src="@/assets/img/icon5.svg" alt=""></a></td>
                                <td><a href="#"><img src="@/assets/img/icon5.svg" alt=""></a></td>
                                <td><a href="#"><img src="@/assets/img/icon5.svg" alt=""></a></td>
                                <td><a href="#"><img src="@/assets/img/icon5.svg" alt=""></a></td>
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
    mounted() {
        this.getUserExamResult({ studentId: this.student.user.id, examGroupId: this.examGroup.id });
    },
    computed: {
        ...mapGetters({ sexTypes: 'getSexTypes', documentTypes: 'getDocumentTypes', usersExamResult: 'getUserExamResults' }),
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
        ...mapActions({ setSelectedStudent: 'setSelectedStudent', changeEditStudentPopup: 'setShowEditStudentPopup', getUserExamResult: 'getUserResultMatrix' }),
        editStudent() {
            this.changeEditStudentPopup({ show: true, student: this.student.user, group: this.examGroup })
        }
    }
}
</script>

<style lang="scss" scoped></style>