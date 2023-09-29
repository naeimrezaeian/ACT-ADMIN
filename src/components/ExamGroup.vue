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
                        <button type="button" class="add show_popup" rel="popup1">
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
                                <template v-for="(user, index) in [1, 2, 3]" :key="index">
                                    <tr @click="toggleUserMetrica(`g1user-${index}`)">
                                        <td>134-187</td>
                                        <td>Макарев Р.В.</td>
                                        <td>Гражданство</td>
                                        <td>Узбекистан</td>
                                        <td>АВ1234567890</td>
                                        <td>Пройден</td>
                                    </tr>
                                    <tr>
                                        <td colspan="6" class="non-pading">
                                            <AdminCandidateMetrica :metricId="`g1user-${index}`" />
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
import { mapGetters } from 'vuex';
export default {
    name: "ExamGroup",
    components: {
        AdminCandidateMetrica
    },
    props: {
        examGroup: {
            type: Object,
            required: true,
        },
    },
    mounted() {
        let self = this;
        this.$Jquery(".show_popup").click(function () {
            var popup_id = self.$Jquery(this).attr("rel");
            self.$Jquery("#" + popup_id).show();
        });

        this.$Jquery(".clouse").click(function () {
            self.$Jquery(".popup").hide();
            self.$Jquery("body").removeClass("hide");
        });
    },
    computed: {
        examGroupStatus() {
            return this.getExamStatus.find((item) => item.key === this.examGroup.status);
        },
        ...mapGetters({ getExamStatus: 'getExamStatus' }),
    },
    methods: {
        toggleUsers() {
            this.$Jquery(`#svo-${this.examGroup.id}`).slideToggle()
        },
        toggleUserMetrica(id) {
            this.$Jquery(`#${id}`).slideToggle()
        }
    },
};
</script>