<template>
    <div class="matrica" :id="metricId">
        <div class="box">
            <div class="left">
                <div class="title">Информация</div>
                <div class="box">
                    <div class="item">
                        <div class="name">ФИО</div>
                        <div class="text">{{ student.user.fullName }}</div>
                    </div>
                    <div class="item">
                        <div class="name">Пол</div>
                        <div class="text">{{ sexType?.value }}</div>
                    </div>
                    <div class="item">
                        <div class="name">Дата рождения</div>
                        <div class="text">{{ student.user.birthDate }}</div>
                    </div>
                    <div class="item">
                        <div class="name">Национальность</div>
                        <div class="text">{{ student.user.nationality }}</div>
                    </div>
                    <div class="item">
                        <div class="name">Город</div>
                        <div class="text">{{ student.user.placeOfBirth }}</div>
                    </div>
                    <div class="item">
                        <div class="name">Документ</div>
                        <div class="text">{{ documentType?.value }}</div>
                    </div>
                    <div class="item">
                        <div class="name">Дата выдачи</div>
                        <div class="text">{{ student.user.issueDate }}</div>
                    </div>
                    <div class="item">
                        <div class="name">Кем выдан</div>
                        <div class="text">{{ student.user.issuedBy }}</div>
                    </div>
                    <div class="item">
                        <div class="name">Миграционная карта</div>
                        <div class="text">{{ student.user.migrationCard }}</div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="box">
                    <div class="title">Матрица результатов</div>
                    <a href="#" class="btn edit show_popup" @click.prevent="editStudent">Редактировать</a>
                </div>
                <input type="file" ref="fileInput" style="display: none;" @change="onFileSelected()" accept=".pdf">
                <div class="table" v-for="(item, itemIndex) in examResult?.result" :key="item">
                    <table v-if="(examResult?.result[0]?.matrix[0])">
                        <tbody>
                            <tr>
                                <th></th>
                                <th class="table-header">{{ item.moduleTitle }}</th>
                            </tr>
                            <tr v-for="(value, valueIndex) in item?.matrix" :key="value"
                                :class="[(item.matrix).indexOf(value) % 2 == 0 ? 'even-row' : 'odd-row']">
                                <td>
                                    <div class="first-col">
                                        <a href="" style="text-align: start;">{{ value.subtestTitle }}</a>
                                        <button type="button" class="add add-btn"
                                            v-if="value.isManualCheck && !value.userAnswerFileId"
                                            @click.prevent="addFile(value, itemIndex, valueIndex)"></button>
                                        <div v-if="value.isManualCheck && value.userAnswerFileId" class="files">
                                            <a class="file" @click.prevent="downloadDocument(value)"></a>
                                        </div>
                                        <button type="button" class="delete delete-btn"
                                            v-if="value.isManualCheck && value.userAnswerFileId"
                                            @click="deleteFile(value, itemIndex, valueIndex)"></button>
                                    </div>
                                </td>
                                <td>{{ value.mark }}</td>
                                <td>{{ value.percentage }}%</td>
                                <td>
                                    <a @click="reviewRecords(value.userSubtestId)">
                                        <img src="@/assets/img/icon5.svg">
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <button class="calaps" @click="$Jquery(`#${metricId}`).slideToggle()">Свернуть</button>
    </div>
    <div class="wrapper" >
        <div class="popup" :style="[showPopUp ? 'display: block' : 'display: none']">
            <div class="object">
                <button type="button" class="clouse" @click="closePopUp()">
                    <img src="@/assets/img/clouse.svg" alt="">
                </button>
                <div class="sostav">
                    <div class="title popup-title">Рекорды</div>
                </div>
                <div class="container">
                    <div class="leftSide">
                        <ol v-if="getExamRecords.length">
                            <li v-for="item in getExamRecords" :key="item" class="records" ref="records"
                                @click="playVideo(item.filename, $event)">
                                {{' ( ' + item.createDateTime + ' )' }}
                            </li>
                        </ol>
                        <h3 v-if="!getExamRecords.length" class="not">нечего показывать !</h3>
                    </div>
                    <div class="rightSide">
                        <video :style="[isVideoPlaying ? 'display: block' : 'display: none']"
                            controls="controls" style="width: 100%; height: auto;" ref="videoPlayer"></video>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "AdminCandidateMetrica",
    props: {
        metricId: {
            type: String,
            required: true,
        },
        examGroup: {
            type: Object,
            required: true,
        },
        student: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            subtestObj: null,
            examIndex: null,
            matrixIndex: null,
            isVideoPlaying: false,
            showPopUp: false,
        }
    },
    computed: {
        ...mapGetters({
            sexTypes: 'getSexTypes',
            documentTypes: 'getDocumentTypes',
            usersExamResult: 'getUserExamResults',
            getExamRecords: 'getExamRecords',
        }),
        sexType() {
            return this.sexTypes.find((item) => item.key === this.student?.user?.sex);
        },
        documentType() {
            return this.documentTypes.find((item) => item.key === this.student?.user?.document);
        },
        examResult() {
            return this.usersExamResult.find((item) => item.studentId === this.student?.user?.id);
        }
    },
    methods: {
        ...mapActions({
            setSelectedStudent: 'setSelectedStudent',
            changeEditStudentPopup: 'setShowEditStudentPopup',
            uploadIFile: 'uploadFile',
            downloadFile: 'downloadFile',
            uploadUserExam: 'uploadUserExam',
            reviewExamRecording: 'reviewExamRecording',
        }),
        editStudent() {
            this.changeEditStudentPopup({ show: true, student: this.student.user, group: this.examGroup })
        },
        addFile(val, itemInd, valInd) {
            this.subtestObj = val;
            this.examIndex = itemInd;
            this.matrixIndex = valInd;
            this.$refs.fileInput.click();
        },
        async onFileSelected() {
            const file = this.$refs.fileInput.files[0];
            const fileId = await this.uploadIFile(file);
            const subtestId = this.subtestObj.userSubtestId;
            await this.uploadUserExam({ userSubtestId: subtestId, userAnswserFileId: fileId });
            this.examResult.result[this.examIndex].matrix[this.matrixIndex].userAnswerFileId = fileId;
        },
        async deleteFile(val, itemInd, valInd) {
            const subtestId = val.userSubtestId;
            await this.uploadUserExam({ userSubtestId: subtestId, userAnswserFileId: null });
            this.examResult.result[itemInd].matrix[valInd].userAnswerFileId = null;
        },
        async downloadDocument(val) {
            let result = await this.downloadFile(val.userAnswerFileId);
            let blob = new Blob([result.data], { type: 'application/pdf' });
            let url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = val.subtestTitle;
            link.click();
            URL.revokeObjectURL(url);
        },
        playVideo(address, event) {
            for (let i in this.$refs.records) {
                this.$refs.records[i].style.fontSize = '16px';
            }
            event.target.style.color = '#0079C1';
            event.target.style.fontSize = '18px';
            this.isVideoPlaying = true;
            this.$refs.videoPlayer.src = `https://api.rudn.site:7064/${address}`;
            this.$refs.videoPlayer.play();
        },
        async reviewRecords(userSubtestId) {
            await this.reviewExamRecording(userSubtestId);
            this.$refs.videoPlayer.src = '';
            this.isVideoPlaying = false;
            this.showPopUp = true;
        },
        closePopUp() {
            this.showPopUp = false;
        }
    }
}
</script>

<style scoped>
.matrica .box .right table tr:nth-child(2) td,
.matrica .box .right table tr:nth-last-child(2) td {
    background: none !important;
}

.even-row {
    background-color: #fff !important;
}

.odd-row {
    background-color: #E6F0F9 !important;
}

.first-col {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 40px;
}

.delete-btn {
    padding: 9.5px !important;
}

.add-btn {
    padding: 11px !important;
}

.file {
    margin-bottom: 0 !important;
    background-size: 20px !important;
    padding: 0 !important;
    width: 35px !important;
    height: 27px !important;
}

.table-header {
    padding-bottom: 20px !important;
    font-size: medium !important;
    font-weight: bold !important;
}
.object {
    margin-top: 70px !important;
    width: 60% !important;
    height: 800px !important;
}
.popup-title {
    margin-top: -50px !important;
}

.container {
    width: 100% !important;
    height: 700px !important;
    display: flex;
}
.leftSide {
    height: 100% !important;
    width: 20% !important;
    margin: 0 15px 0 -15px;
}
.rightSide {
    background-color: #E6F0F9;
    height: 100% !important;
    width: 80% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.records {
    margin-top: 30px;
    cursor: pointer;
    color: #919191;
}
.records:hover {
    color: #0079C1;
}
.not {
    color: #919191;
}
</style>