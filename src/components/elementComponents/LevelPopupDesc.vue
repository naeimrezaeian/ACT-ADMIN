<template>
    <div class="object">
        <button type="button" class="clouse"><img src="@/assets/img/clouse.svg" alt=""></button>
        <div class="sostav levelshow all_info">
            <div class="box">
                <div class="spisok">
                    <div class="item">
                        <div class="name">Уровень</div>
                        <div class="txt">{{ examLevel.title }}</div>
                    </div>
                    <div class="item">
                        <div class="name">Составитель</div>
                        <div class="txt">{{ examLevel?.createdBy?.name + ' ' + examLevel?.createdBy?.family }}</div>
                    </div>
                    <div class="item">
                        <div class="name">Краткое название</div>
                        <div class="txt">{{ examLevel.shortName }}</div>
                    </div>
                    <div class="item">
                        <div class="name">Дата создания</div>
                        <div class="txt">{{ examLevel.createdOn }}</div>
                    </div>
                    <div class="item">
                        <div class="name">Описание</div>

                    </div>
                    <div class="item">
                        <div class="txt desc" v-html="examLevel.desc"></div>
                    </div>
                </div>



            </div>



        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "AdminLevelPopupDesc",
    computed: {
        ...mapGetters({ examLevel: 'getlevelToShow' })
    }
}
</script>

<style scoped>
.desc {
    overflow: auto;
    max-height: 300px;
}
</style>