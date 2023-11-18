<template>
  <div class="wrapper">
    <div class="box_end">
      <div class="right">
        <div class="head">
          <h1>{{ selectedBranch.shortName }}</h1>
          <div class="bot">
            <button type="button" @click="addGroup" class="add">
              Добавить группу
            </button>
          </div>
        </div>
        <div class="colap">
          <div class="top_colp" onclick="$('#top_colp').slideToggle()">
            <div class="title">Карточка филиала</div>
          </div>
          <div class="body_colp" id="top_colp">
            <router-link to="Edit" class="edit">Редактировать</router-link>
            <div class="box">
              <div class="lf">
                <div class="title">Общая информация</div>
                <ul>
                  <li><span>Полное название</span> {{ selectedBranch.name }}</li>
                  <li><span>Короткое название</span> {{ selectedBranch.shortName }}</li>
                  <li><span>Тип филиала</span> {{ selectedBranch.branchType }}</li>
                  <li><span>Код филиала</span> {{ selectedBranch.branchCode }}</li>
                </ul>
              </div>
              <div class="lr">
                <div class="title">Ответственные</div>
                <ul>
                  <li><span>Ответственный</span> Иванов Иван Иванович</li>
                  <li>
                    <span>Главный ответственный</span> Иванов Иван Иванович
                  </li>
                  <li><span>Официальное лицо</span> Иванов Иван Иванович</li>
                  <li><span>Проверяющий</span> Иванов Иван Иванович</li>
                </ul>
              </div>
            </div>
            <div class="box">
              <div class="lf">
                <div class="title">Реквезиты</div>
                <ul>
                  <li><span>Город</span> {{ selectedBranch.city }}</li>
                  <li>
                    <span>Факт. адрес</span> {{ selectedBranch.actualAddress }}
                  </li>
                  <li>
                    <span>Юр. адрес</span> {{ selectedBranch.legalAddress }}
                  </li>
                  <li><span>ИНН</span> {{ selectedBranch.tin }}</li>
                  <li><span>КПП</span> {{ selectedBranch.checkpoint }}</li>
                </ul>
              </div>
              <div class="lr">
                <div class="title">Документы</div>
                <ul>
                  <li><span>Номер договора (1)</span> №1234567890-1</li>
                  <li><span>Дата договова (1)</span> 12.02.2022</li>
                  <li><span>Номер договора (2)</span> №1234567890-2</li>
                  <li><span>Дата договова (2)</span> 24.05.2022</li>
                </ul>
              </div>
            </div>
            <div class="box">
              <div class="lf">
                <div class="title">Прикрепленные файлы</div>
                <div class="files">
                  <a v-for="item in docs" :key="item" :value="item" @click.prevent="downloadDocument(item)"
                  class="file">{{item.fileFilename}}</a>
                </div>
              </div>
              <div class="lr">
                <div class="title">Фотография</div>
                <div class="img">
                  <img :src="deafultImageUrl" ref="branchImage" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ege_fil">
          <div class="title">ЭКЗАМЕНЫ ФИЛИАЛА</div>
          <div class="serch">
            <form>
              <div class="box">
                <input type="text" placeholder="Выбрать период" onfocus="(this.type='date')" class="dats"
                  v-model="filter.examDate" />
                <select v-model="filter.examLevelId">
                  <option value="" disabled selected>Гражданство</option>
                  <option v-for="item in selectedBranch.branchExamLevels" :key="item.id" :value="item.id">
                    {{ item.examLevelTitle }}</option>
                </select>
                <select v-model="filter.status">
                  <option value="" disabled selected>Выбрать статус</option>
                  <option v-for="item in examStatus" :key="item.key" :value="item.key">{{ item.value }}</option>
                </select>
              </div>
              <div class="box">
                <input type="text" class="serch_in" placeholder="Напишите запрос для поиска" v-model="filter.comment" />
                <span class="lup"></span>
                <button type="button" class="btn" @click="searchBranchExams">Поиск</button>
              </div>
            </form>
          </div>
          <ExamGroup v-for="item in branchExams" :key="item.id" :examGroup="item" />
          <div class="doc_fil">
            <div class="doc_svo">
              <div class="info">
                <div class="name">Гражданство</div>
                <div class="proverka treb">
                  <span>Требуются акты</span>
                  <span class="nomer">№ 1-3325</span>
                </div>
              </div>
              <div id="svo-2">
                <div class="box">
                  <div class="item">
                    <ul>
                      <li><span>Ответственный:</span> Длиннаяфамилия И.О.</li>
                      <li><span>Дата проведения:</span> 22.04.2021</li>
                      <li><span>Кол-во тестируемых:</span> 7</li>
                    </ul>
                  </div>
                  <div class="coment">
                    <div class="name">Комменатрий</div>
                    <div class="text">Текстовый комментарий к карточке</div>
                  </div>
                </div>
                <div class="bot">
                  <button type="button" class="def">Загрузить акт</button>
                  <button type="button" class="def">Печать акта</button>
                  <button type="button" class="def">
                    Печать сводной таблицы
                  </button>
                </div>
              </div>
            </div>
            <button class="calaps" onclick="$('#svo-2').slideToggle()">
              Свернуть
            </button>
          </div>
          <div class="doc_fil">
            <div class="doc_svo">
              <div class="info">
                <div class="name">Гражданство</div>
                <div class="proverka pro">
                  <span>На проверке (акты)</span>
                  <span class="nomer">№ 1-3325</span>
                </div>
              </div>
              <div id="svo-3">
                <div class="box">
                  <div class="item">
                    <ul>
                      <li><span>Ответственный:</span> Длиннаяфамилия И.О.</li>
                      <li><span>Дата проведения:</span> 22.04.2021</li>
                      <li><span>Кол-во тестируемых:</span> 7</li>
                    </ul>
                  </div>
                  <div class="coment">
                    <div class="name">Комменатрий</div>
                    <div class="text">Текстовый комментарий к карточке</div>
                  </div>
                  <div class="files">
                    <div class="name">Загружено:</div>
                    <div class="rem">
                      <button type="button" class="remove_pdf"></button>
                      <a class="file" href="#">Акт 1.pdf</a>
                    </div>
                  </div>
                </div>
                <div class="bot mini">
                  <button type="button" class="def">Загрузить акт</button>
                  <button type="button" class="def">Печать акта</button>
                  <button type="button" class="def">
                    Печать сводной таблицы
                  </button>
                  <button type="button" class="btn">
                    Отправить окончательно
                  </button>
                </div>
              </div>
            </div>
            <button class="calaps" onclick="$('#svo-3').slideToggle()">
              Свернуть
            </button>
          </div>
          <div class="doc_fil">
            <div class="doc_svo">
              <div class="info">
                <div class="name">Гражданство</div>
                <div class="proverka">
                  <span>Проверка завершена</span>
                  <span class="nomer">№ 1-3325</span>
                </div>
              </div>
              <div id="svo-4">
                <div class="box">
                  <div class="item">
                    <ul>
                      <li><span>Ответственный:</span> Длиннаяфамилия И.О.</li>
                      <li><span>Дата проведения:</span> 22.04.2021</li>
                      <li><span>Кол-во тестируемых:</span> 7</li>
                    </ul>
                  </div>
                  <div class="coment">
                    <div class="name">Комменатрий</div>
                    <div class="text">Текстовый комментарий к карточке</div>
                  </div>
                  <div class="files">
                    <div class="name">Загружено:</div>
                    <div class="rem">
                      <button type="button" class="remove_pdf"></button>
                      <a class="file" href="#">Акт 1.pdf</a>
                    </div>
                  </div>
                </div>
                <div class="bot mini">
                  <button type="button" class="def">Загрузить акт</button>
                  <button type="button" class="def">
                    Печать сводной таблицы
                  </button>
                  <button type="button" class="dise">Архивировать</button>
                </div>
              </div>
            </div>
            <button class="calaps" onclick="$('#svo-4').slideToggle()">
              Свернуть
            </button>
          </div>
          <div class="doc_fil">
            <div class="doc_svo">
              <div class="info">
                <div class="name">Гражданство</div>
                <div class="error">
                  Требуется внести данные по XXX, YYY и ZZZ
                </div>
                <div class="proverka red">
                  <span>Отклонено</span>
                  <span class="nomer">№ 1-3325</span>
                </div>
              </div>
              <div id="svo-5">
                <div class="box">
                  <div class="item">
                    <ul>
                      <li><span>Ответственный:</span> Длиннаяфамилия И.О.</li>
                      <li><span>Дата проведения:</span> 22.04.2021</li>
                      <li><span>Кол-во тестируемых:</span> 7</li>
                    </ul>
                  </div>
                  <div class="coment">
                    <div class="name">Комменатрий</div>
                    <div class="text">Текстовый комментарий к карточке</div>
                  </div>
                  <div class="files">
                    <div class="name">Загружено:</div>
                    <div class="rem">
                      <button type="button" class="remove_pdf"></button>
                      <a class="file" href="#">Акт 1.pdf</a>
                    </div>
                    <div class="rem">
                      <button type="button" class="remove_pdf"></button>
                      <a class="file" href="#">Акт 2.pdf</a>
                    </div>
                  </div>
                </div>
                <div class="bot max">
                  <button type="button" class="def">Печать акта</button>
                  <button type="button" class="def">
                    Печать сводной таблицы
                  </button>
                  <button type="button" class="btn">
                    Отправить окончательно
                  </button>
                </div>
              </div>
            </div>
            <button class="calaps" onclick="$('#svo-5').slideToggle()">
              Свернуть
            </button>
          </div>
          <div class="doc_fil">
            <div class="doc_svo">
              <div class="info">
                <div class="name">Гражданство</div>
                <div class="proverka new">
                  <span>Новая</span>
                  <span class="nomer">№ 1-3325</span>
                </div>
              </div>
              <div id="svo-6">
                <div class="box">
                  <div class="item">
                    <ul>
                      <li><span>Ответственный:</span> Длиннаяфамилия И.О.</li>
                      <li><span>Дата проведения:</span> 22.04.2021</li>
                      <li><span>Кол-во тестируемых:</span> 7</li>
                    </ul>
                  </div>
                  <div class="coment">
                    <div class="name">Комменатрий</div>
                    <div class="text">Текстовый комментарий к карточке</div>
                  </div>
                </div>
                <div id="svo-10">
                  <div class="bot bots">
                    <button type="button" class="def">Протокол</button>
                    <button type="button" class="def">Список</button>
                    <button type="button" class="add show_popup" rel="popup1">
                      Добавить пользователя
                    </button>
                  </div>
                  <div class="table">
                    <table>
                      <tbody>
                        <tr>
                          <th>ID</th>
                          <th>ФИО</th>
                          <th>Уровень</th>
                          <th>Национальность</th>
                          <th>Миграционная карта</th>
                          <th>Статус</th>
                        </tr>
                        <tr onclick="$('#g1user-1').slideToggle()">
                          <td>134-187</td>
                          <td>Макарев Р.В.</td>
                          <td>Гражданство</td>
                          <td>Узбекистан</td>
                          <td>АВ1234567890</td>
                          <td>Пройден</td>
                        </tr>
                        <tr>
                          <td colspan="6" class="non-pading">
                          </td>
                        </tr>

                        <tr onclick="$('#g1user-2').slideToggle()">
                          <td>134-187</td>
                          <td>Макарев Р.В.</td>
                          <td>Гражданство</td>
                          <td>Узбекистан</td>
                          <td>АВ1234567890</td>
                          <td>Пройден</td>
                        </tr>
                        <tr>
                          <td colspan="6" class="non-pading">
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <button class="calaps" onclick="$('#svo-10').slideToggle()">
              Свернуть
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="popup" id="editStudentPopup">
    <div class="object objectCandidates">
      <button type="button" class="clouse">
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
                      <option v-for="item in sexTypes" :key="item.key" :value="item.key">{{ item.value }}</option>
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
                  <input type="text" placeholder="__.__.____" onfocus="(this.type='date')" id="date" name="date"
                    class="dats" v-model="student.birthDate" />
                </div>
                <div class="item">
                  <label for="sprav">Справка для пересдачи</label>
                  <input type="text" id="sprav" name="sprav" v-model="student.refNumber" placeholder="Номер справки" />
                </div>
              </div>
            </div>
            <div class="right">
              <div class="img">
                <img src="@/assets/img/ava.svg" alt="" />
                <span>Фотография в формате .jpg, .jpeg или .png. Размер не более
                  2мб</span>
              </div>
              <div class="bot">
                <button type="button" class="add">Сделать фото</button>
                <button type="button" class="down">Загрузить</button>
                <button type="button" class="remove">Удалить</button>
              </div>
            </div>
            <div class="docs">
              <div class="title">Документы</div>
              <div class="box">
                <div class="item doc_item_1">
                  <label for="doc">Документ</label>
                  <select name="doc" id="doc" v-model="student.document">
                    <option v-for="item in documentTypes" :key="item.key" :value="item.key">{{ item.value }}</option>
                  </select>
                </div>
                <div class="item doc_item_2">
                  <div select="select">
                    <label for="date_v">Дата выдачи</label>
                    <input type="text" placeholder="__.__.____" onfocus="(this.type='date')" id="date_v" name="date_v"
                      class="dats" v-model="student.issueDate" />
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
                <div class="uploads">
                  <div class="item">
                    <div class="files">
                      <button type="button" class="remove_pdf"></button>
                      <a class="file" href="#">Скан паспорта.pdf</a>
                    </div>
                  </div>
                </div>
                <div class="uploads">
                  <div class="item">
                    <div class="files">
                      <button type="button" class="remove_pdf"></button>
                      <a class="file" href="#">Скан паспорта.pdf</a>
                    </div>
                  </div>
                </div>
                <div class="uploads">
                  <div class="item">
                    <div class="files">
                      <button type="button" class="remove_pdf"></button>
                      <a class="file" href="#">Скан паспорта.pdf</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="box">
                <div class="item doc_upload_btn">
                  <button type="button" class="add_doc">
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
  </div> -->
  <EditStudentPopup v-if="showEditStudentPopup"></EditStudentPopup>
</template>

<script>
import EditStudentPopup from "./elementComponents/EditStudent.vue"
import { mapActions, mapGetters } from "vuex";
import ExamGroup from "./ExamGroup.vue";
export default {
  name: "AdminBrancheView",
  components: {
    ExamGroup,
    EditStudentPopup
  },
  data() {
    return {
      filter: {
        status: "",
        examLevelId: "",
        examDate: "",
        comment: "",
      },
      student: {}
    }
  },
  mounted() {
    if(this.selectedBranch.docs){
      let img = this.selectedBranch.docs.find(e=>e.fileType==='image');
      if(img){
        this.downloadImage(img.fileId);
      }
    }

    // let self = this;
    // this.$Jquery(".show_popup").click(function () {
    //   var popup_id = self.$Jquery(this).attr("rel")
    //   var userId = self.$Jquery(this).attr("data-user-id")
    //   var groupId = self.$Jquery(this).attr("data-group-id")
    //   var student = self.branchExams.find(x => x.id === groupId)?.userExamLevels.find(x => x.id === userId)
    //   console.log(userId, groupId, student)
    //   self.student = student?.user ?? {}
    //   self.student.groupId = groupId
    //   self.$Jquery("#" + popup_id).show();
    // });

    // this.$Jquery(".clouse").click(function () {
    //   self.$Jquery(".popup").hide();
    //   self.$Jquery("body").removeClass("hide");
    // });
  },
  computed: {
    ...mapGetters({
      selectedBranch: "getSelectedBranch",
      examStatus: "getExamStatus",
      branchExams: "getBranchExams",
      sexTypes: 'getSexTypes',
      documentTypes: 'getDocumentTypes',
      getSelectedGroup: 'getSelectedBranchExam',
      showEditStudentPopup: 'getShowEditStudentPopup'
    }),
    deafultImageUrl(){
      return require('@/assets/img/ava.svg');
    },
    docs(){
      return this.selectedBranch.docs ? this.selectedBranch.docs.filter(e=>e.fileType==='document') : '';
    }
  },
  methods: {
    ...mapActions({
      getBranchExams: "fetchBranchExams",
      addBranchExam: "createBranchExam",
      addUserToGroup: 'addUserToBranchExam',
      editUserInGroup: 'editUserInBranchExam',
      getAllStudents: 'getAllStudents',
      downloadImageFile: 'downloadFile',
    }),
    async searchBranchExams() {
      await this.getBranchExams(this.filter);
    },
    // async saveStudent() {
    //   this.student.groupId ??= this.getSelectedGroup?.id
    //   this.student.id ? await this.editUserInGroup(this.student) : await this.addUserToGroup(this.student)
    //   this.$Jquery(".popup").hide();
    //   this.$Jquery("body").removeClass("hide");
    //   await this.getAllStudents({ groupId: this.student.groupId })
    // },
    async addGroup() {
      let self = this;
      var responsibleElement = `<select id="responsible">
        <option value disabled>Выбрать ответственного</option>
      ${this.selectedBranch.branchSystemUsers.map((user) => {
        return `<option value="${user.userId}">${user.fullName}</option>`
      }).join("")}
        </select>`

      await this.Swal.fire({

        input: "select",
        html:
          '<input id="examDate" type="text" placeholder="Дата экзамена" onfocus="(this.type=\'date\')" class="dats addBranchGroup-dats" />' +
          '<input id="comment"  type="text" placeholder="Комменатрий" />' +
          responsibleElement,
        inputOptions: {
          ...this.selectedBranch.branchExamLevels.reduce((acc, level) => {
            acc[level.examLevelId] = level.examLevelTitle;
            return acc;
          }, {}),
        },
        inputPlaceholder: "Выбрать уровень",
        showCancelButton: true,
        confirmButtonText: 'Сохранить',
        confirmButtonColor: '#0079C1',
        cancelButtonText: 'Отменить',
        preConfirm: async () => {
          let examDate = document.getElementById("examDate").value;
          const comment = document.getElementById("comment").value;
          const examLevelId = document.querySelector(".swal2-select").value;
          const responsibleId = document.getElementById("responsible").value;

          if (!examDate) {
            self.Swal.showValidationMessage("Введите дату экзамена");
            return;
          }
          const now = new Date();
          examDate = new Date(document.getElementById("examDate").value);

          if (examDate <= now) {
            self.Swal.showValidationMessage("Дата экзамена должна быть больше текущей даты");
            return;
          }

          if (!comment) {
            self.Swal.showValidationMessage("Введите комментарий");
            return;
          }
          if (!responsibleId) {
            self.Swal.showValidationMessage("Выберите ответственного");
            return;
          }
          if (!examLevelId) {
            self.Swal.showValidationMessage("Выберите уровень");
            return;
          }
          const result = await self.addBranchExam({
            examDate,
            comment,
            responsibleId,
            examLevelId,
            branchId: self.selectedBranch.id
          });
          if (!result) {
            self.Swal.showValidationMessage("Ошибка при добавлении");
            return;
          }
          return [examDate, responsibleId, comment, examLevelId];
        },


      });
    },
    async downloadImage(fileId){
      let result = await this.downloadImageFile(fileId);
      let blob = new Blob([result.data], {type: 'image/*'});
      let url = URL.createObjectURL(blob);
      this.$refs.branchImage.src = url;
    },
    async downloadDocument(file){
      let result = await this.downloadImageFile(file.fileId);
      let blob = new Blob([result.data], {type: 'application/pdf'});
      let url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = file.fileFilename;
      link.click();
      URL.revokeObjectURL(url);
    }
  },
};
</script>

<style lang="scss" scoped></style>