<template>
    <div class="container">
        <div class="wrapper">
            <div class="menu">
                <img class="menu-item" src="@/assets/img/icon12.svg" alt="">
                <h2 class="menu-item">{{ fullName }}</h2>
                <div class="menu-item">
                    <button onclick="$('#options-menu').slideToggle()" class="options-menu-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
                        </svg>
                    </button>
                    <div class="options-menu" id="options-menu">
                        <button class="option-btn show_popup" onclick="$('#options-menu').slideToggle()"
                            rel="popup" style="margin: 15px 0 10px 0;">изменить пароль</button>
                        <button class="option-btn" @click="exit()">Выйти</button>             
                    </div>
                </div>
            </div>
            <div class="popup" id="popup">
                <div class="object">
                    <button type="button" class="clouse"><img src="@/assets/img/clouse.svg" alt=""></button>
                    <div class="sostav">
                        <div class="title">изменить пароль</div>
                        <form>
                            <div class="item">
                                <label for="uroven">Старый Пароль</label>
                                <input type="password" v-model="currentPass">
                                <div v-for="error in v$.currentPass.$errors" :key="error.$uid" class="error-msg">{{ error.$message }}</div>
                            </div>
                            <div class="item">
                                <label for="model">Новый Пароль</label>
                                <input type="password" v-model="newPass">
                                <div v-for="error in v$.newPass.$errors" :key="error.$uid" class="error-msg">{{ error.$message }}</div>
                            </div>
                            <div class="item">
                                <label for="uroven">Подтвердите Новый Пароль</label>
                                <input type="password" v-model="confirmPass">
                                <div v-for="error in v$.confirmPass.$errors" :key="error.$uid" class="error-msg">{{ error.$message }}</div>
                            </div>
                            <div class="botom">
                                <button type="button" class="btn save" @click="changePass()">Сохранить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';
import router from '@/router';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, minLength, sameAs } from '@vuelidate/validators'
export default {
    name:'AdminUserMenu',
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            fullName: '',
            currentPass: '',
            newPass: '',
            confirmPass: '',
        }
    },
    validations () {
        return {
            currentPass: {
                required: helpers.withMessage(this.getinputErrorMessages.changePassword.currentPass, required),
            },
            newPass: {
                required: helpers.withMessage(this.getinputErrorMessages.changePassword.newPass, required),
                minLength: helpers.withMessage(
                    this.getinputErrorMessages.changePassword.newPassMin,
                    minLength(8)
                ),
            },
            confirmPass: {
                sameAsPassword: helpers.withMessage(
                    this.getinputErrorMessages.changePassword.confirmPass,
                    sameAs(this.newPass)
                ),
            },
        }
    },
    mounted() {
        this.$Jquery('#options-menu').hide();
        this.getName();
        let self = this;
        this.$Jquery('.show_popup').click(function () {
            var popup_id = self.$Jquery(this).attr("rel")
            self.$Jquery("#" + popup_id).show();
        });
        this.$Jquery('.clouse').click(function () {
            self.$Jquery('.popup').hide();
            self.$Jquery('body').removeClass('hide');
        });
    },
    computed: {
        ...mapGetters({
            getSwalDeleteDialog: 'getSwalDeleteDialog',
            getinputErrorMessages: 'getinputErrorMessages',
        })
    },
    methods: {
        ...mapActions({
            changePassword: 'changePassword', 
        }),
        getName() {
            const user = JSON.parse(localStorage.getItem('user'));
            this.fullName = user.name + ' ' + user.family;
        },
        exit() {
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            router.push({ name: 'Login' })
        },
        async changePass() {
            const result = await this.v$.$validate();
            if (result) {
                await this.changePassword({ currentPassword: this.currentPass , newPassword: this.newPass });
                this.Swal.fire(this.getSwalDeleteDialog.successChangePassword);
                this.currentPass = '', this.newPass = '', this.confirmPass = '';
                this.$Jquery('.popup').hide();
            }
        }
    },
}
</script>


<style scoped>
.container {
    background-color: #F2F8FE;
}
.wrapper {
    display: flex;
    margin-top: 15px !important;
}
.menu {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100% !important;
    height: 20px;
    margin-bottom: 15px !important;
}
.menu-item {
    color: #0079C1;
    margin-left: 20px;
    cursor: default;
}
.options-menu {
    background-color: #F2F8FE;
    position: absolute;
    display: flex;
    flex-wrap: nowrap;
    flex-flow: column;
    justify-content: space-evenly;
    border-radius: 5px;
    padding: 5px;
    width: 195px;
    height: 70px;
    z-index: 100;
    margin-left: -175px;
}
.options-menu-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 30px;
    border-radius: 5px;
    cursor: pointer;
    background-color: transparent;
    color: #0079C1;
    border: none;
}
.option-btn {
    cursor: pointer;
    padding: 5px;
    background-color: transparent;
    border: none;
    border-radius: 5px;
    color: #0079C1;;
    font-weight: bold;
}
.option-btn:hover {
    background-color: #2057A1;
    color: #fff;
}
.object {
    margin-top: 200px !important;
    width: 30% !important;
    height: auto !important;
}
.item {
    margin-bottom: 30px !important;
}
</style>