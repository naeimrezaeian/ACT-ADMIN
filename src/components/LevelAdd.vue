<template>
    <div class="wrapper">
        <div class="head">
            <h1>СОЗДАНИЕ УРОВНЯ</h1>
        </div>
        <div class="level">
            <div class="title">Общая информация</div>
            <form>
                <div class="box">
                    <div class="item">
                        <label for="name">Название уровня</label>
                        <input type="text" id="name" v-model="examlevel.title">
                        <div v-for="error in v$.examlevel.title.$errors" :key="error.$uid" class="error-msg">{{ error.$message }}</div>
                    </div>
                    <div class="itemsmall">
                        <label for="name_s">Краткое название</label>
                        <input type="text" id="name_s" v-model="examlevel.shortName">
                        <div v-for="error in v$.examlevel.shortName.$errors" :key="error.$uid" class="error-msg">{{ error.$message }}</div>
                    </div>
                    <div class="itemsmall">
                        <label for="urov">Статус</label>
                        <select id="urov" v-model="examlevel.status">
                            <option value="" disabled selected>Выбрать статус</option>
                            <option v-for="({ key, value }, index) in statuses" :key="index" :value="key">{{ value }}
                        </option>
                        </select>
                    </div>

                </div>

                <div class="item">
                    <label for="mess">Описание</label>
                    <editor id="tiny" :init="Tinyconfig" api-key="y2pziixksnltsc59lsigx2xoh6exhrlx403o5usmmmd8awwh"
                        v-model="examlevel.desc"></editor>
                </div>
                <div class="botom">
                    <router-link to="/Levels" class="btn otmena">Отменить</router-link>
                    <button type="button" class="btn save" @click="saveChanges">Создать</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import { mapActions, mapGetters } from 'vuex';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
const Tinyconfig = {
    selector: '#tiny',
    height: 214,
    plugins: [
        'advlist autolink link image lists charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks code fullscreen insertdatetime media nonbreaking',
        'table emoticons template paste help'
    ],
    toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
        'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
        'forecolor backcolor emoticons | help',
    menubar: false

}

export default {
    name: "LevelAdd",
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            Tinyconfig,
            examlevel: {status:'active'}
        }
    },
    validations () {
        return {
            examlevel: {
                title: {
                    required: helpers.withMessage(this.getinputErrorMessages.title, required),
                },
                shortName: {
                    required: helpers.withMessage(this.getinputErrorMessages.shortName, required),
                },
            },
        }
    },
    components: {
        'editor': Editor
    },
    computed:{
        ...mapGetters({
            examLevelEdit:'getEditLevel',
            statuses:'getStatusField',
            getinputErrorMessages: 'getinputErrorMessages',
        })
    },
    methods: {
        ...mapActions({
            addNewExamLevel:'addNewLevel',
            editExamLevel:'editExamLevel'
        }),
        async saveChanges(){
            const result = await this.v$.$validate();
            if (result) {
                this.$route.fullPath.endsWith('Edit')?
                await this.editExamLevel(this.examlevel):
                await this.addNewExamLevel(this.examlevel)
            }
        }

    },
    mounted(){
        if(this.$route.fullPath.endsWith('Edit')){
            this.examlevel=this.examLevelEdit
        }
    }

}
</script>

<style lang="scss" scoped>

</style>