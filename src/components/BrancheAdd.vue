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
                            </div>
                            <div class="item">
                                <label for="zip">Код филиала</label>
                                <input type="text" id="zip" v-model="branch.branchCode" placeholder="145-288">
                            </div>
                        </div>
                        <div class="box">
                            <div class="item">
                                <label for="name_s">Краткое название</label>
                                <input type="text" id="name_s" v-model="branch.shortName" placeholder="Введите название">
                            </div>
                            <div class="item">
                                <label for="tip">Тип филиала</label>
                                <select id="tip" v-model="branch.branchType">
                                    <option value="" disabled selected>Выбрать тип филиала</option>
                                    <option v-for="item in branchTypes" :key="item.key" :value="item.key">{{ item.value }}
                                    </option>

                                </select>
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
                </div>
                <div class="box">
                    <div class="left">
                        <div v-for="(item, index) in branch.branchSystemUsers" :key="item?.id ?? index" class="box">
                            <div class="item">
                                <label for="lico">пользователь</label>
                                <select id="lico" v-model="item.userId">
                                    <option value="" disabled selected>выбрать пользователя</option>
                                    <option v-for="user in usersNotInBranch" :key="user.id" :value="user.id">
                                        {{ user.fullName }}</option>
                                </select>
                            </div>
                            <div class="item">
                                <label for="otv">роль пользователя</label>
                                <select id="otv" v-model="item.userRole">
                                    <option value="" disabled selected>выберите роль пользователя</option>
                                    <option v-for="role in branchUserTypes" :key="item?.id ?? index + role.key"
                                        :value="role.key">{{ role.value }}</option>
                                </select>
                            </div>
                            <button type="button" @click="removeBranchUser(index)" class="delete" />

                        </div>
                    </div>
                </div>
                <div class="zag top_m">
                    <span>Адрес центра, реквизиты</span>
                    <input type="file" ref="branchAttachments" multiple="true" style="display: none;"
                    accept=".pdf" @change="onAttachmentSelected()">
                    <button type="button" class="add" @click.prevent="addAttachment()">Прикрепить файлы к карточке</button>
                </div>
                <div class="box">
                    <div class="left">
                        <div class="box">
                            <div class="item">
                                <label for="city">Город</label>
                                <input type="text" id="city" v-model="branch.city" placeholder="Введите название">
                            </div>
                            <div class="item">
                                <label for="inn">ИНН</label>
                                <input type="text" id="inn" v-model="branch.tin" placeholder="Введите название">
                            </div>
                        </div>
                        <div class="box">
                            <div class="item">
                                <label for="adres">Фактический адрес</label>
                                <input type="text" id="adres" v-model="branch.actualAddress" placeholder="Введите название">
                            </div>
                            <div class="item">
                                <label for="kpp">КПП</label>
                                <input type="text" id="kpp" v-model="branch.checkpoint" placeholder="Введите название">
                            </div>
                        </div>
                        <div class="box">
                            <div class="item">
                                <label for="ur_adres">Юридический адрес</label>
                                <input type="text" id="ur_adres" v-model="branch.legalAddress"
                                    placeholder="Введите название">
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <label>Загруженные файлы</label>
                        <div v-for="item in docs" 
                            :key="item" :value="item" class="files">
                            <button type="button" class="remove_pdf" @click.prevent="deleteAttachment(item)"></button>
                            <a class="file" href="#">{{item.fileFilename}}</a>
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

export default {
    name: "AdminBrancheAdd",
    data() {
        return {
            selectAll: false,
            branch: {
                id: null,
                branchSystemUsers: [],
                docs: [],
                branchExamLevels: [],
            },
        }
    },
    async mounted() {
        if (this.$route.fullPath.endsWith('Edit')) {
            this.branch = this.getSelectedBranch;
            this.levels = await this.getLevels();
            if(this.img){
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
        docs(){
            return this.branch.docs ? this.branch.docs.filter(e=>e.fileType==='document') : '';
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
            this.$route.fullPath.endsWith('Edit') ?
                await this.updateBranch(this.branch) :
                await this.addBranch(this.branch)
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
            let obj = {fileId, fileType:'image'};
            if(this.img){
                this.branch.docs.splice(this.branch.docs.indexOf(this.img),1);
            }
            this.branch.docs.push(obj);
            this.downloadImage(fileId);
        },
        async onAttachmentSelected() {
            for(let i=0;i<this.$refs.branchAttachments.files.length;i++){
                let file = this.$refs.branchAttachments.files[i];
                let fileId = await this.uploadImageFile(file)
                let obj = {fileFilename: file.name, fileId, fileType: 'document'};
                this.branch.docs.push(obj);
            }
        },
        async downloadImage(fileId) {
            let result = await this.downloadImageFile(fileId);
            let blob = new Blob([result.data], {type: 'image/*'});
            let url = URL.createObjectURL(blob);
            this.$refs.profileImage.src = url;
        },
        deleteProfileImage() {
            this.branch.docs.splice(this.img,1);
            this.$refs.profileImage.src = this.defaultProfileImageUrl;
            this.$refs.fileInput.value = '';
        },
        deleteAttachment(val) {
            this.branch.docs.splice(this.branch.docs.indexOf(val),1);
            this.$refs.branchAttachments.value = '';
        }
    },
}
</script>

<style lang="scss" scoped></style>