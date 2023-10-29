<template>
    <div class="popup">
        <div class="object objectCandidates">
            <button type="button" class="clouse" @click="closePopup">
                <img src="@/assets/img/clouse.svg" alt="" />
            </button>
            <div class="sostav">
                <div class="all_info">
                    <div class="title">Общая информация</div>
                    <form>
                        <div class="left">
                            <div class="box">
                                <div class="item">
                                    <label for="fio">Фамилия</label>
                                    <input type="text" id="fio" name="fio" v-model="student.family" />
                                </div>
                                <div class="item">
                                    <label for="name">Имя</label>
                                    <input type="text" id="name" name="name" v-model="student.name" />
                                </div>
                            </div>
                            <div class="box">
                                <div class="item">
                                    <label for="och">Отчество</label>
                                    <input type="text" id="och" name="och" v-model="student.father" />
                                </div>
                                <div class="item">
                                    <div class="select">
                                        <label for="pol">Пол</label>
                                        <select name="pol" id="pol" v-model="student.sex">
                                            <option value="" disabled selected>Выбрать</option>
                                            <option v-for="item in sexTypes" :key="item.key" :value="item.key">{{ item.value
                                            }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="box">
                                <div class="item">
                                    <label for="naci">Национальность</label>
                                    <input type="text" id="naci" name="naci" v-model="student.nationality" />
                                </div>
                                <div class="item">
                                    <label for="roj">Место рождения</label>
                                    <input type="text" id="roj" name="roj" v-model="student.placeOfBirth" />
                                </div>
                                <div class="item">
                                    <label for="date">Дата рождения</label>
                                    <input type="text" placeholder="__.__.____" onfocus="(this.type='date')" id="date"
                                        name="date" class="dats" v-model="student.birthDate" />
                                </div>
                                <div class="item">
                                    <label for="sprav">Справка для пересдачи</label>
                                    <input type="text" id="sprav" name="sprav" v-model="student.refNumber"
                                        placeholder="Номер справки" />
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="img">
                                <img :src="defaultProfileImageUrl" ref="profileImage" alt="" />
                                <span>Фотография в формате .jpg, .jpeg или .png. Размер не более
                                    2мб</span>
                            </div>
                            <div class="bot">
                                <button type="button" class="down" @click.prevent="selectFile()">Загрузить</button>
                                <input type="file" ref="fileInput" style="display: none;" accept=".jpg,.jpeg,.png"
                                multiple="false" @change="onFileSelected()">
                                <button type="button" class="remove" @click.prevent="deleteStudentProfileImage()">Удалить</button>
                            </div>
                        </div>
                        <div class="docs">
                            <div class="title">Документы</div>
                            <div class="box">
                                <div class="item doc_item_1">
                                    <label for="doc">Документ</label>
                                    <select name="doc" id="doc" v-model="student.document">
                                        <option v-for="item in documentTypes" :key="item.key" :value="item.key">{{
                                            item.value }}</option>
                                    </select>
                                </div>
                                <div class="item doc_item_2">
                                    <div select="select">
                                        <label for="date_v">Дата выдачи</label>
                                        <input type="text" placeholder="__.__.____" onfocus="(this.type='date')" id="date_v"
                                            name="date_v" class="dats" v-model="student.issueDate" />
                                    </div>
                                </div>
                                <div class="item doc_item_3">
                                    <label for="kem">Кем выдан</label>
                                    <input type="text" id="kem" name="kem" v-model="student.issueBy" />
                                </div>
                                <div class="item doc_item_4">
                                    <label for="cart">Миграционная карта</label>
                                    <input type="text" id="cart" name="cart" v-model="student.migrationCard" />
                                </div>
                            </div>
                            <div class="box">
                                <div class="uploads" v-for="item in attachments.files" :key="item" :value="item">
                                    <div class="item">
                                        <div class="files">
                                            <button type="button" class="remove_pdf"
                                            @click.prevent="deleteAttachment()"></button>
                                            <a class="file" href="#">Скан паспорта.pdf</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box">
                                <div class="item doc_upload_btn">
                                    <input type="file" ref="attachment" accept=".jpg, .jpeg, .png, .pdf"
                                    style="display: none;" @change="onAttachmentSelected()"
                                    multiple="true">
                                    <button type="button" class="add_doc" @click.prevent="addAttachment()">
                                        Загрузить документы
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="botom">
                            <button type="button" class="btn save" @click="saveStudent">Сохранить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            attachments: {
                files:[],
                pictures:[]
            }
        }
    },
    computed: {
        ...mapGetters({
            examStatus: "getExamStatus",
            sexTypes: 'getSexTypes',
            documentTypes: 'getDocumentTypes',
            student: 'getSelectedStudent'
        }),
        defaultProfileImageUrl() {
            return require(`@/assets/img/ava.svg`);
        },
    },
    mounted() {
        
    },
    methods: {
        ...mapActions({
            addUserToGroup: 'addUserToBranchExam',
            editUserInGroup: 'editUserInBranchExam',
            getAllStudents: 'getAllStudents',
            changeEditStudentPopup: 'setShowEditStudentPopup',
            downloadImageFile: 'downloadFile',
            uploadImageFile: 'uploadFile',
        }),
        closePopup() {
            this.changeEditStudentPopup({ show: false })
        },
        async saveStudent() {
            this.student.id ? await this.editUserInGroup(this.student) : await this.addUserToGroup(this.student)
            var groupId = this.student.groupId
            this.closePopup()
            await this.getAllStudents({ groupId: groupId })

        },
        selectFile() {
            this.$refs.fileInput.click();
        },
        addAttachment() {
            this.$refs.attachment.click();
        },
        async onFileSelected() {
            const file = this.$refs.fileInput.files[0];
            let result = await this.uploadImageFile(file)
            this.student.userImageId = result;
            this.downloadUserProfileImage(result)
        },
        async onAttachmentSelected() {
            for(let i=0;i<this.$refs.attachment.files.length;i++){
                let file = this.$refs.attachment.files[i];
                let result = await this.uploadImageFile(file)
                this.attachments.files.push(file);
                console.log(result)
            }
        },
        async downloadUserProfileImage(fileId) {
            let result = await this.downloadImageFile(fileId)
            const blob = new Blob([result.data], {type: 'image/*'});
            let url = URL.createObjectURL(blob);
            this.$refs.profileImage.src = url;
        },
        deleteStudentProfileImage(){
            this.student.studentImageId = null;
            this.$refs.profileImage.src = this.defaultProfileImageUrl;
            this.$refs.fileInput.value = '';
        },
        deleteAttachment(){
            this.$refs.attachment.value = '';
        },
    }
}
</script>