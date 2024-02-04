<template>
    <div class="wrapper">
        <div class="head">
            <h1>СОЗДАНИЕ ФИЛИАЛА</h1>
        </div>
        <div class="filial_add">
            <div class="title">Общая информация</div>
            <form>
                <div class="box">
                    <div class="left">
                        <div class="box">
                            <div class="item">
                                <label for="name">Название филиала</label>
                                <input type="text" id="name" v-model="branch.name" placeholder="Введите название">
                                <div v-for="error in v$.branch.name.$errors" :key="error.$uid" class="error-msg">{{
                                    error.$message }}</div>
                            </div>
                            <div class="item">
                                <label for="zip">Код филиала</label>
                                <input type="text" id="zip" v-model="branch.branchCode"
                                    placeholder="Введите 4-значный код филиала">
                                <div v-for="error in v$.branch.branchCode.$errors" :key="error.$uid" class="error-msg">{{
                                    error.$message }}</div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="item">
                                <label for="name_s">Краткое название</label>
                                <input type="text" id="name_s" v-model="branch.shortName" placeholder="Введите название">
                                <div v-for="error in v$.branch.shortName.$errors" :key="error.$uid" class="error-msg">{{
                                    error.$message }}</div>
                            </div>
                            <div class="item">
                                <label for="tip">Тип филиала</label>
                                <select id="tip" v-model="branch.branchType">
                                    <option value="" disabled selected>Выбрать тип филиала</option>
                                    <option v-for="item in branchTypes" :key="item.key" :value="item.key">{{ item.value }}
                                    </option>
                                </select>
                                <div v-for="error in v$.branch.branchType.$errors" :key="error.$uid" class="error-msg">{{
                                    error.$message }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="img">
                            <img ref="profileImage" :src="defaultProfileImageUrl" alt="">
                            <span>Фотография в формате .jpg, .jpeg или .png. Размер не более 2мб</span>
                        </div>
                        <div class="bot">
                            <input type="file" ref="fileInput" style="display: none;" accept=".jpg, .jpeg, .png"
                                @change="onFileSelected()">
                            <button type="button" @click.prevent="selectFile()" class="down">Загрузить</button>
                            <button type="button" @click.prevent="deleteProfileImage()" class="remove">Удалить</button>
                        </div>
                    </div>
                </div>
                <div class="zag">
                    <span>Ответственные</span>
                    <button type="button" @click="addBranchUser" class="add">Добавить поле</button>
                    <div v-if="v$.branch.branchSystemUsers?.$errors[0]?.$property == '0'" class="error-msg"
                        style="margin: 5px 0 0 10px;">{{
                            v$.branch.branchSystemUsers?.$errors[0].$message
                        }}
                    </div>
                </div>
                <div class="box">
                    <div class="left">
                        <div v-for="(item, index) in branch.branchSystemUsers" :key="item?.id ?? index" class="box">
                            <div class="item special">
                                <label>пользователь</label>
                                <select v-model="item.userId">
                                    <option value="" disabled selected>выбрать пользователя</option>
                                    <option v-for="user in usersNotInBranch" :key="user.id" :value="user.id">
                                        {{ user.fullname }}</option>
                                </select>
                                <div v-for="error in v$.branch.branchSystemUsers[0].userId.$errors" :key="error.$uid"
                                    class="error-msg">{{ error.$message }}</div>
                            </div>
                            <div class="item special">
                                <label>роль пользователя</label>
                                <input :value="getUserRole(item.userId, index)" disabled />
                            </div>
                            <button type="button" @click="removeBranchUser(index)" class="delete" />
                        </div>
                    </div>
                </div>
                <div class="zag top_m">
                    <span>Адрес центра, реквизиты</span>
                    <input type="file" ref="branchAttachments" multiple="true" style="display: none;" accept=".pdf"
                        @change="onAttachmentSelected()">
                    <button type="button" class="add" @click.prevent="addAttachment()">Прикрепить файлы к карточке</button>
                </div>
                <div class="box">
                    <div class="left">
                        <div class="box">
                            <div class="item">
                                <label for="city">Город</label>
                                <input type="text" id="city" v-model="branch.city" placeholder="Введите название">
                                <div v-for="error in v$.branch.city.$errors" :key="error.$uid" class="error-msg">{{
                                    error.$message }}</div>
                            </div>
                            <div class="item">
                                <label for="inn">ИНН</label>
                                <input type="text" id="inn" v-model="branch.tin" placeholder="Введите название">
                                <div v-for="error in v$.branch.tin.$errors" :key="error.$uid" class="error-msg">{{
                                    error.$message }}</div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="item">
                                <label for="adres">Фактический адрес</label>
                                <input type="text" id="adres" v-model="branch.actualAddress" placeholder="Введите название">
                                <div v-for="error in v$.branch.actualAddress.$errors" :key="error.$uid" class="error-msg">{{
                                    error.$message }}</div>
                            </div>
                            <div class="item">
                                <label for="kpp">КПП</label>
                                <input type="text" id="kpp" v-model="branch.checkpoint" placeholder="Введите название">
                                <div v-for="error in v$.branch.checkpoint.$errors" :key="error.$uid" class="error-msg">{{
                                    error.$message }}</div>

                            </div>
                        </div>
                        <div class="box">
                            <div class="item">
                                <label for="ur_adres">Юридический адрес</label>
                                <input type="text" id="ur_adres" v-model="branch.legalAddress"
                                    placeholder="Введите название">
                                <div v-for="error in v$.branch.legalAddress.$errors" :key="error.$uid" class="error-msg">{{
                                    error.$message }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <label>Загруженные файлы</label>
                        <div v-for="item in docs" :key="item" :value="item" class="files">
                            <button type="button" class="remove_pdf" @click.prevent="deleteAttachment(item)"></button>
                            <a class="file" href="#">{{ item.fileFilename }}</a>
                        </div>
                    </div>
                </div>

                <div class="box" v-if="isEditMode">
                    <div class="col">
                        <div class="title">УРОВНИ ФИЛИАЛОВ</div>
                        <div class="panel">
                            <div class="top_panel">
                                <div class="chek">
                                    <input type="checkbox" id="all" class="checkbox" v-model="selectAllLevels">
                                    <label for="all">Выбрать все</label>
                                </div>
                                <button type="button" class="delete" @click="removeSelectedLevels">Удалить выбранные из
                                    варианта</button>
                            </div>
                            <div class="variant" v-for="item in branch.branchExamLevels" :key="item.id">
                                <div class="chek">
                                    <input type="checkbox" class="checkbox" :id="item.id ?? item.nId"
                                        v-model="item.isSelected">
                                    <label :for="item.id ?? item.nId"></label>
                                </div>
                                <div class="folder">
                                    <div class="fol">
                                        <div class="zag">{{ item.examLevelTitle }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="title">УРОВНИ</div>
                        <div class="panel">
                            <div class="top_panel">

                            </div>
                            <div class="variant" v-for="item in levels" :key="item.id">
                                <div class="chek">
                                    <input type="checkbox" class="checkbox" :id="item.id" v-model="item.isSelected">
                                    <label :for="item.id"></label>
                                </div>
                                <div class="folder">
                                    <div class="fol">
                                        <div class="zag">{{ item.title }}</div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn" @click="addlevelsToBranch">Добавить выбранное к
                                УРОВНИ ФИЛИАЛОВ</button>
                        </div>
                    </div>
                </div>
                <div class="botom">
                    <router-link to="/Branches" class="btn otmena">Отменить</router-link>
                    <button type="button" @click="saveChanges" class="btn save">Сохранить</button>
                </div>
            </form>
        </div>

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
export default {
    name: "AdminBrancheAdd",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            selectAll: false,
            branch: {
                id: null,
                branchSystemUsers: [],
                branchExamLevels: [],
            },
        }
    },
    validations() {
        return {
            branch: {
                name: {
                    required: helpers.withMessage(this.getinputErrorMessages.addBranch.name, required),
                },
                branchCode: {
                    required: helpers.withMessage(this.getinputErrorMessages.addBranch.branchCode, required),
                },
                shortName: {
                    required: helpers.withMessage(this.getinputErrorMessages.shortName, required),
                },
                branchType: {
                    required: helpers.withMessage(this.getinputErrorMessages.addBranch.branchType, required),
                },
                branchSystemUsers: [{
                    required: helpers.withMessage(this.getinputErrorMessages.addBranch.branchSystemUsers, required),
                    userId: {
                        required: helpers.withMessage(this.getinputErrorMessages.addBranch.branchSystemUsers, required),
                    },
                }],
                city: {
                    required: helpers.withMessage(this.getinputErrorMessages.addBranch.city, required),
                },
                tin: {
                    required: helpers.withMessage(this.getinputErrorMessages.addBranch.tin, required),
                },
                actualAddress: {
                    required: helpers.withMessage(this.getinputErrorMessages.addBranch.actualAddress, required),
                },
                checkpoint: {
                    required: helpers.withMessage(this.getinputErrorMessages.addBranch.checkpoint, required),
                },
                legalAddress: {
                    required: helpers.withMessage(this.getinputErrorMessages.addBranch.legalAddress, required),
                },
            },
        }
    },
    async mounted() {
        if (this.$route.fullPath.endsWith('Edit')) {
            this.branch = this.getSelectedBranch;
            this.levels = await this.getLevels();
            if (this.img) {
                this.downloadImage(this.img.fileId);
            }
        }
        await this.fetchUsersNotInBranch({ branchId: this.branch.id })
    },
    computed: {
        ...mapGetters({
            getSelectedBranch: 'getSelectedBranch',
            branchTypes: 'getBranchType',
            branchUserTypes: 'getBranchUserType',
            usersNotInBranch: 'getUsersNotInBranch',
            levels: 'getExamLevels',
            getinputErrorMessages: 'getinputErrorMessages',
        }),
        isEditMode: {
            get() {
                return this.$route.fullPath.toLocaleLowerCase().endsWith("edit")
            }
        },
        selectAllLevels: {
            get() {
                return this.selectAll
            },
            set(value) {
                this.selectAll = value
                this.branch.branchExamLevels.forEach(x => x.isSelected = value)
            }
        },
        defaultProfileImageUrl() {
            return require('@/assets/img/ava.svg');
        },
        img() {
            return this.getSelectedBranch.docs ? this.branch.docs.find(e => e.fileType === 'image') : '';
        },
        docs() {
            return this.branch.docs ? this.branch.docs.filter(e => e.fileType === 'document') : '';
        }
    },
    methods: {
        ...mapActions({
            addBranch: 'addBranch',
            updateBranch: 'updateBranch',
            fetchUsersNotInBranch: 'getUsersNotInBranch',
            getLevels: 'getLevels',
            downloadImageFile: 'downloadFile',
            uploadImageFile: 'uploadFile',
        }),
        async saveChanges() {
            const result = await this.v$.$validate();
            if (result) {
                this.$route.fullPath.endsWith('Edit') ?
                    await this.updateBranch(this.branch) :
                    await this.addBranch(this.branch)
            }
        },
        addBranchUser() {

            this.branch.branchSystemUsers.push({
                branchId: this.branch.id,
                userId: null,
                userRole: null
            })
        },
        removeBranchUser(index) {
            this.branch.branchSystemUsers.splice(index, 1)
        },
        addlevelsToBranch() {

            var selectedLevels = this.levels.filter(x => x.isSelected)
            selectedLevels.forEach(x => {
                // Check if the item already exists in the array
                if (!this.branch.branchExamLevels.some(y => y.examLevelId === x.id)) {
                    this.branch.branchExamLevels.push({
                        nId: `BranchLevel_${x.id}${this.branch.branchExamLevels.length}`,
                        branchId: this.branch.id,
                        examLevelId: x.id,
                        examLevelTitle: x.title,
                        isSelected: false
                    });
                }
            });
        },
        removeSelectedLevels() {
            this.branch.branchExamLevels = this.branch.branchExamLevels.filter(x => !x.isSelected)
        },
        selectFile() {
            this.$refs.fileInput.click();
        },
        addAttachment() {
            this.$refs.branchAttachments.click();
        },
        async onFileSelected() {
            const file = this.$refs.fileInput.files[0];
            let fileId = await this.uploadImageFile(file);
            let obj = { fileId, fileType: 'image' };
            if (this.img) {
                this.branch.docs.splice(this.branch.docs.indexOf(this.img), 1);
            }
            this.branch.docs.push(obj);
            this.downloadImage(fileId);
        },
        async onAttachmentSelected() {
            for (let i = 0; i < this.$refs.branchAttachments.files.length; i++) {
                let file = this.$refs.branchAttachments.files[i];
                let fileId = await this.uploadImageFile(file)
                let obj = { fileFilename: file.name, fileId, fileType: 'document' };
                this.branch.docs.push(obj);
            }
        },
        async downloadImage(fileId) {
            let result = await this.downloadImageFile(fileId);
            let blob = new Blob([result.data], { type: 'image/*' });
            let url = URL.createObjectURL(blob);
            this.$refs.profileImage.src = url;
        },
        deleteProfileImage() {
            if (this.img) {
                this.branch.docs.splice(this.branch.docs.indexOf(this.img), 1);
                this.$refs.profileImage.src = this.defaultProfileImageUrl;
                this.$refs.fileInput.value = '';
            }
        },
        deleteAttachment(val) {
            this.branch.docs.splice(this.branch.docs.indexOf(val), 1);
            this.$refs.branchAttachments.value = '';
        },
        getUserRole(userId, ind) {
            this.branch.branchSystemUsers[ind].userRole = this.usersNotInBranch.find(x => x.id === userId)?.role;
            this.branch.branchSystemUsers[ind].fullName = this.usersNotInBranch.find(x => x.id === userId)?.fullname;
            return this.branchUserTypes.find(x => x.key === this.usersNotInBranch.find(x => x.id === userId)?.role)?.value
        }
    },
}
</script>

<style scoped>
.special {
    width: 45% !important;
}
</style>