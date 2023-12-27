<template>
    <div class="wrapper">
        <div class="head filial">
            <h1>ПРОВЕРКА</h1>
        </div>
        <div class="content">
            <div class="left-side">
                <div class="top">
                    <div class="title">Информация</div>
                    <div class="box">
                        <div class="item">
                            <div class="name">ФИО</div>
                            <div class="text">{{ getUserExamToShow?.userExamLevel?.user?.fullName }}</div>
                        </div>
                        <div class="item">
                            <div class="name">Пол</div>
                            <div class="text">{{ getUserExamToShow?.userExamLevel?.user?.sex }}</div>
                        </div>
                        <div class="item">
                            <div class="name">Дата рождения</div>
                            <div class="text">{{ getUserExamToShow?.userExamLevel?.user?.birthDate }}</div>
                        </div>
                        <div class="item">
                            <div class="name">Национальность</div>
                            <div class="text">{{ getUserExamToShow?.userExamLevel?.user?.nationality }}</div>
                        </div>
                        <div class="item">
                            <div class="name">Город</div>
                            <div class="text">{{ getUserExamToShow?.userExamLevel?.user?.placeOfBirth }}</div>
                        </div>
                        <div class="item">
                            <div class="name">Документ</div>
                            <div class="text">{{ getUserExamToShow?.userExamLevel?.user?.document }}</div>
                        </div>
                        <div class="item">
                            <div class="name">Дата выдачи</div>
                            <div class="text">{{ getUserExamToShow?.userExamLevel?.user?.issueDate }}</div>
                        </div>
                        <div class="item">
                            <div class="name">Кем выдан</div>
                            <div class="text">{{ getUserExamToShow?.userExamLevel?.user?.issuedBy }}</div>
                        </div>
                        <div class="item">
                            <div class="name">Миграционная карта</div>
                            <div class="text">
                            <div class="text">{{ getUserExamToShow?.userExamLevel?.user?.migrationCard }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img">
                    <img :src="defaultProfileImageUrl" ref="profileImage" alt="">
                </div>
                <div class="bottom">
                    <div class="headers">Оценка:</div>
                    <input type="text" class="input" placeholder="Введите оценку">
                    <div class="headers">Ваши комментарии:</div>
                    <textarea class="input comment"></textarea>
                </div>
            </div>
            <div class="right-side">
            </div>
        </div>
        <div class="footer">
            <router-link to="/Users" type="button" class="btn cancel">Отменить</router-link>
            <button type="button" class="btn">Сохранить</button>
        </div>
    </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'AdminCorrectingExam',
    data() {
        return {
            
        }
    },
    async mounted() {
        const userImgId = this.getUserExamToShow.userExamLevel.user.userImageId;
        userImgId ? this.downloadUserProfileImage(userImgId) : null;
    },
    computed: {
        ...mapGetters({
            getUserExamToShow: 'getUserExamToShow',
        }),
    },
    methods: {
        ...mapActions({
            downloadImageFile: 'downloadFile',
        }),
        async downloadUserProfileImage(fileId) {
            let result = await this.downloadImageFile(fileId);
            const blob = new Blob([result.data], { type: 'image/*' });
            var url = URL.createObjectURL(blob);
            this.$refs.profileImage.src = url;
        },
    },
}
</script>


<style scoped>
.content {
    width: 100%;
    display: flex;
}
.content .left-side{
    margin-right: 20px;
    display: flex;
    width: 25%;
    flex-direction: column;
}
.content .right-side{
    width: 70%;
    background-color: white;

}
.content .left-side .top {
    background-color: white;
    margin-bottom: 30px;
    padding: 10px 20px;
}
.content .left-side .top .box .item {
    display: flex;
    overflow: hidden;
    margin-bottom: 10px;
    line-height: 16px;
}
.content .left-side .top .box .item .name {
    width: 45%; 
    color: #909090;
}
.content .left-side .top .box .item .text {
    display: flex;
    font-size: 14px;
    width: 55%;
}
.content .left-side .img {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 5px;
    height: 230px;
    background-color: #C4C4C4;
    margin-bottom: 30px;
}
.content .left-side .img img {
    max-width: 100%;
    max-height: 100%;
}
.content .left-side .bottom {
    display: flex;
    flex-direction: column;
}
.content .left-side .bottom .headers {
    font-size: 16px;
    margin: 15px 0;
}
.content .left-side .bottom .comment {
    width: 93%;
}
.footer {
    margin: 50px 0;
    display: flex;
    justify-content: center;
}
.footer .btn {
    display: flex;
    cursor: pointer;
    border: none;
    justify-content: center;
    margin-right: 50px;
    width: 13%;
}
.footer .cancel {
    background-color: #E6F0F9;
    color: black;
    width: 10%;
}
.footer .cancel:hover {
    background-color: #2057A1;
    color: white;
}
</style>