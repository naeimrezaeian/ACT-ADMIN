<template>
    <div class="wrapper">
        <div class="head">
            <h1>СОЗДАНИЕ МОДУЛЬ</h1>
        </div>
        <div class="level">
            <div class="title">Общая информация</div>
            <form>
                <div class="box">
                    <div class="item">
                        <label for="name">Название модуль</label>
                        <input type="text" id="name" v-model="examModule.title">
                        <div v-for="error in v$.examModule.title.$errors" :key="error.$uid" class="error-msg">{{ error.$message }}</div>
                    </div>
                    <div class="itemsmall">
                        <label for="status">Уровень</label>
                        <select id="status" v-model="examModule.examLevelId">
                            <option value="" disabled selected>Выбрать уровень</option>
                            <option v-for="item in levels" :key="item.id" :value="item.id">{{ item.title }}</option>
                        </select>
                        <div v-for="error in v$.examModule.examLevelId.$errors" :key="error.$uid" class="error-msg">{{ error.$message }}</div>
                    </div>
                    <div class="itemsmall">
                        <label for="urov">Статус</label>
                        <select id="urov" v-model="examModule.status">
                            <option value="" disabled selected>Выбрать статус</option>
                            <option v-for="({ key, value }, index) in statuses" :key="index" :value="key">{{ value }}
                            </option>
                        </select>
                    </div>

                </div>

                <div class="item">
                    <label for="mess">Описание</label>
                    <editor id="tiny" :init="Tinyconfig" api-key="y2pziixksnltsc59lsigx2xoh6exhrlx403o5usmmmd8awwh"
                        v-model="examModule.description"></editor>
                </div>
                <div class="botom">
                    <router-link to="/Module" class="btn otmena">Отменить</router-link>
                    <button type="button" class="btn save" @click="saveChanges">Создать</button>
                </div>
            </form>
        </div>
    </div>
</template>




<script>
import Editor from '@tinymce/tinymce-vue'
import { mapGetters } from 'vuex';
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
import { mapActions } from 'vuex';
export default {
    name: "AdminModuleAdd",
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            Tinyconfig,
            examModule: {status:'active'}
        }
    },
    validations () {
        return {
            examModule: {
                title: {
                    required: helpers.withMessage(this.getinputErrorMessages.title, required),
                },
                examLevelId: {
                    required: helpers.withMessage(this.getinputErrorMessages.examLevel, required),
                },
            },
        }
    },
    mounted() {
        this.fetchLevels()
        if(this.$route.fullPath.endsWith('Edit')){
            this.examModule=this.examModuleEdit
        }
    },
    components: {
        'editor': Editor
    },
    computed: {
        ...mapGetters({
            statuses: 'getStatusField',
            levels: 'getExamLevels',
            examModuleEdit:'getEditModule',
            getinputErrorMessages: 'getinputErrorMessages',
        })
    },
    methods: {
        ...mapActions({
            fetchLevels: 'getLevels',
            addNewModule: 'addNewModule',
            editModule: 'editModule',
        }),
        async saveChanges() {
            const result = await this.v$.$validate();
            if (result) {
                this.$route.fullPath.endsWith('Edit') ?
                await this.editModule(this.examModule) :
                await this.addNewModule(this.examModule)
            }
        }
    }

}
</script>
<style lang="scss" scoped></style>