<template>
    <template v-if="examGroup.status == getExamStatus[0].key">
        <button type="button" class="def">Протокол</button>
        <button type="button" class="def">Список</button>
        <button type="button" class="add show_popup" rel="editStudentPopup" @click="addUser(examGroup)">
            Добавить пользователя
        </button>
    </template>
    <template v-if="examGroup.status == getExamStatus[1].key"> <button type="button" class="def">Загрузить акт</button>
        <button type="button" class="def">Печать акта</button>
        <button type="button" class="def">
            Печать сводной таблицы
        </button>
        <button type="button" class="btn">
            Отправить окончательно
        </button></template>
    <template v-if="examGroup.status == getExamStatus[2].key">
        <button type="button" class="def">Загрузить акт</button>
        <button type="button" class="def">
            Печать сводной таблицы
        </button>
        <button type="button" class="dise">Архивировать</button>
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
        <button type="button" class="def">Печать акта</button>
        <button type="button" class="def">
            Печать сводной таблицы
        </button>
        <button type="button" class="btn">
            Отправить окончательно
        </button>
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
        ...mapGetters({ getExamStatus: 'getExamStatus' }),
    },
    methods: {
        ...mapActions({ changeEditStudentPopup: 'setShowEditStudentPopup' }),
        addUser(group) {
            this.changeEditStudentPopup({ show: true, student: {}, group })
        },
    }
}
</script>
