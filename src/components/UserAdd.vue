<template>
    <div class="wrapper">
        <div class="head">
            <h1>РЕДАКТИРОВАНИЕ ПРОФИЛЯ ПОЛЬЗОВАТЕЛЯ</h1>
        </div>
        <div class="all_info">
            <div class="title">Общая информация</div>
            <form>
                <div class="left">
                    <div class="box">
                        <div class="item">
                            <label for="fio">Фамилия</label>
                            <input type="text" id="fio" name="fio" v-model="user.family">
                        </div>
                        <div class="item">
                            <label for="name">Имя</label>
                            <input type="text" id="name" name="name" v-model="user.name">
                        </div>
                    </div>
                    <div class="box">
                        <div class="item">
                            <label for="och">Отчество</label>
                            <input type="text" id="och" name="och" v-model="user.father">
                        </div>
                        <div class="item">
                            <div class="select">
                                <label for="pol">Пол</label>
                                <select name="pol" id="pol" v-model="user.sex">
                                    <option value="" disabled selected>Выбрать</option>
                                    <option v-for="item in sexTypes" :key="item.key" :value="item.key">{{ item.value }}
                                    </option>
                                </select>
                            </div>
                            <div class="select">
                                <label for="date">Дата рождения</label>
                                <input type="text" placeholder="__.__.____" onfocus="(this.type='date')" id="date"
                                    name="date" class="dats" v-model="user.birthDate">
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="item">
                            <label for="naci">Адрес электронной почты</label>
                            <input type="text" id="naci" name="naci" v-model="user.email">
                        </div>
                        <div class="item">
                            <div class="select">
                                <label for="pol">Роль</label>
                                <select name="pol" id="pol" v-model="user.role">
                                    <option value="" disabled selected>Выбрать</option>
                                    <option v-for="item in adminRoleTypes" :key="item.key" :value="item.key">{{ item.value
                                    }}
                                    </option>
                                </select>
                            </div>
                            <div class="select">
                                <label for="pol">Статус</label>
                                <select name="pol" id="pol" v-model="user.status" style="width: 100%;">
                                    <option value="" disabled selected>Выбрать</option>
                                    <option v-for="item in statusTypes" :key="item.key" :value="item.key">{{ item.value }}
                                    </option>

                                </select>
                            </div>
                            <!-- <div class="select" v-if="user.role && user.role != adminRoleTypes[0].key">
                                <label for="roj">Филиал</label>
                                <select name="roj" id="roj" class="usereditselect" v-model="user.branchId">
                                    <option value="" disabled selected>Выбрать</option>
                                    <option v-for="item in branches" :key="item.id" :value="item.id">{{ item.branchCode +
                                        '-' + item.name }}</option>
                                </select>
                            </div> -->
                        </div>

                    </div>
                    <div class="box">
                        <div class="item">
                            <button type="button" class="btn-reset" @click="resetPass()" :disabled="!this.isEditMode">Сброс пароля</button>
                        </div>
                    </div>
                    <!-- <div class="box">
                        <div class="item">
                            <label for="naci">Пароль</label>
                            <input type="text" id="naci" name="naci" value="">
                        </div>

                        <div class="item">
                            <div class="select">
                                <label for="pol">Статус</label>
                                <select name="pol" id="pol" v-model="user.status">
                                    <option value="" disabled selected>Выбрать</option>
                                    <option v-for="item in statusTypes" :key="item.key" :value="item.key">{{ item.value }}
                                    </option>

                                </select>
                            </div>

                        </div>
                    </div> -->

                    <div class="usereditaccess">
                        <div class="title">Дополнительно</div>

                        <div class="docs">
                            <div class="left" style="width: 100%;">
                                <div class="box">
                                    <div class="item">
                                        <template v-for="(role, index) in firstColumn" :key="index">
                                            <input type="checkbox" :id="role.id" v-model="role.isSelected" class="checkbox">
                                            <label :for="role.id">{{ role.title }}</label>

                                        </template>
                                    </div>
                                    <div class="item">
                                        <template v-for="(role, index) in secondColumn" :key="index + firstColumn.length">
                                            <input type="checkbox" :id="role.id" v-model="role.isSelected" class="checkbox">
                                            <label :for="role.id">{{ role.title }}</label>
                                        </template>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="right">
                    <div class="img">
                        <img :src="defaultProfileImageUrl" ref="profileImage" alt="">
                        <span>Фотография в формате .jpg, .jpeg или .png. Размер не более 2мб</span>
                    </div>
                    <div class="bot">
                        <button type="button" class="down" @click.prevent="selectFile">Загрузить</button>
                        <input type="file" ref="fileInput" style="display: none;" accept=".jpg,.jpeg,.png"
                            @change="onFileSelected" multiple="false" />
                        <button type="button" class="remove" @click.prevent="deleteUserProfileImage">Удалить</button>
                    </div>
                </div>

                <div class="botom">
                    <router-link to="/Users" type="button" class="btn otmena">Отменить</router-link>
                    <button type="button" class="btn save" @click="saveChanges">Сохранить</button>

                </div>
            </form>
        </div>

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "AdminUserAdd",
    data() {
        return {
            user: {}
        }
    },
    async mounted() {

        this.getAllBranches()
        await this.fetchAllRoles()
        if (this.isEditMode) {
            this.user = this.getSelectedUser;
            this.user.birthDate = new Date(this.user.birthDate).toLocaleDateString();
            this.user.userClaims.forEach(element => {
                var item = this.allRoles.find(x => x.id === element.claimId)
                item ? item.isSelected = true : item
            });
            if (this.user.userImageId) {
                this.downloadUserProfileImage(this.user.userImageId)
                this.user.branchId = this.user?.branchSystemUsers[0]?.branchId
            }
        }
    },
    methods: {
        ...mapActions({
            fetchAllRoles: 'getAllRoles',
            getAllBranches: 'fetchSimplifiedBranches',
            downloadImageFile: 'downloadFile',
            uploadImageFile: 'uploadFile',
            addSystemUser: 'addNewSystemUser',
            editSystemUser: 'editSystemUser',
            resetPassword: 'resetPassword',
        }),
        selectFile() {
            this.$refs.fileInput.click();
        },
        async onFileSelected() {
            const file = this.$refs.fileInput.files[0];
            let result = await this.uploadImageFile(file);
            this.user.userImageId = result;
            this.downloadUserProfileImage(result);
        },
        async downloadUserProfileImage(fileId) {
            let result = await this.downloadImageFile(fileId);
            const blob = new Blob([result.data], { type: 'image/*' });
            var url = URL.createObjectURL(blob);
            this.$refs.profileImage.src = url;
            //this.$refs.profileImage.load()
        },
        deleteUserProfileImage() {
            this.user.userImageId = null
            this.$refs.profileImage.src = this.defaultProfileImageUrl
            this.$refs.fileInput.value = ''

        },
        async saveChanges() {
            var userRoles = this.allRoles.filter(x => x.isSelected).map(x => x.id)
            this.user.userRoles = userRoles
            this.isEditMode ? await this.editSystemUser(this.user) : await this.addSystemUser(this.user)
        },
        async resetPass() {
            await this.resetPassword(this.getSelectedUser.id);
            this.Swal.fire(this.getSwalDeleteDialog.successResetPassword);
        },
    },
    computed: {
        ...mapGetters({
            allRoles: 'getAllRoles',
            sexTypes: 'getSexTypes',
            adminRoleTypes: 'getBranchUserType',
            branches: 'getSimplifiedBranches',
            statusTypes: 'getStatusField',
            getSelectedUser: 'getSelectedUser',
            getSwalDeleteDialog: 'getSwalDeleteDialog',
        }),
        firstColumn() {
            return this.allRoles.slice(0, Math.ceil(this.allRoles.length / 2));
        },
        secondColumn() {
            return this.allRoles.slice(Math.ceil(this.allRoles.length / 2));
        },
        defaultProfileImageUrl() {
            return require(`@/assets/img/ava.svg`);
        },
        isEditMode: {
            get() {
                return this.$route.fullPath.toLocaleLowerCase().endsWith("edit")
            }
        }
    }
}
</script>

<style scoped>
.btn-reset {
    background-color: #E6F0F9;
    cursor: pointer;
    width: auto;
    height: auto;
    padding: 5px;
    border-radius: 3px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    transition: background-color .5s;
}
.btn-reset:hover {
    background-color: #2057A1;
    color: #fff;
}
.btn-reset:disabled:hover {
    cursor: default;
    background-color: #E6F0F9;
    color: rgba(16, 16, 16, 0.3);
}
</style>