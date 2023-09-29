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
                            <img src="@/assets/img/ava.svg" alt="">
                            <span>Фотография в формате .jpg, .jpeg или .png. Размер не более 2мб</span>
                        </div>
                        <div class="bot">
                            <button type="button" class="down">Загрузить</button>
                            <button type="button" class="remove">Удалить</button>
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
                    <button type="button" class="add">Прикрепить файлы к карточке</button>
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
                        <div class="files">
                            <button type="button" class="remove_pdf"></button>
                            <a class="file" href="#">Договор 1.pdf</a>
                        </div>
                        <div class="files">
                            <button type="button" class="remove_pdf"></button>
                            <a class="file" href="#">Реквизиты 2.pdf</a>
                        </div>
                        <div class="files">
                            <button type="button" class="remove_pdf"></button>
                            <a class="file" href="#">Допник 3.pdf</a>
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
                branchExamLevels: [],
            }
        }
    },
    async mounted() {

        if (this.$route.fullPath.endsWith('Edit')) {
            this.branch = this.getSelectedBranch
            this.levels = await this.getLevels()
        }
        await this.fetchUsersNotInBranch({ branchId: this.branch.id })
    },
    computed: {
        ...mapGetters({
            getSelectedBranch: 'getSelectedBranch',
            branchTypes: 'getBranchType',
            branchUserTypes: 'getBranchUserType',
            usersNotInBranch: 'getUsersNotInBranch',
            levels: 'getExamLevels'
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
        }
    },
    methods: {
        ...mapActions({
            addBranch: 'addBranch',
            updateBranch: 'updateBranch',
            fetchUsersNotInBranch: 'getUsersNotInBranch',
            getLevels: 'getLevels'
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
        }
    }
}
</script>

<style lang="scss" scoped></style>