<template>
  <div class="wrapper">
    <div class="box_end">
      <div class="right">
        <div class="head">
          <h1>НАЗВАНИЕ ФИЛИАЛА</h1>
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
            <button type="button" class="edit">Редактировать</button>
            <div class="box">
              <div class="lf">
                <div class="title">Общая информация</div>
                <ul>
                  <li><span>Полное название</span> Филиал №1 ШОМП Москва</li>
                  <li><span>Короткое название</span> Филиал 1</li>
                  <li><span>Тип филиала</span> ПЛЦТ</li>
                  <li><span>Код филиала</span> 1-3345</li>
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
                  <li><span>Город</span> Москва</li>
                  <li>
                    <span>Факт. адрес</span> 113167, Москва, Ленинский проспект,
                    9/3
                  </li>
                  <li>
                    <span>Юр. адрес</span> 145678, Мытищи, Зеленая улица, 2с6
                  </li>
                  <li><span>ИНН</span> 1234567890</li>
                  <li><span>КПП</span> 1234567890</li>
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
                  <a class="file" href="#">Договор 1.pdf</a>
                  <a class="file" href="#">Договор 2.pdf</a>
                  <a class="file" href="#">Договор 3.pdf</a>
                </div>
              </div>
              <div class="lr">
                <div class="title">Фотография</div>
                <div class="img">
                  <img src="@/assets/img/ava.svg" alt="" />
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
                <input
                  type="text"
                  placeholder="Выбрать период"
                  onfocus="(this.type='date')"
                  class="dats"
                />
                <select>
                  <option value="" disabled selected>Гражданство</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <select>
                  <option value="" disabled selected>Выбрать статус</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div class="box">
                <input
                  type="text"
                  class="serch_in"
                  value=""
                  placeholder="Напишите запрос для поиска"
                />
                <span class="lup"></span>
                <button type="button" class="btn">Поиск</button>
              </div>
            </form>
          </div>
          <div class="doc_fil">
            <div class="doc_svo">
              <div class="info">
                <div class="name">Гражданство</div>
                <div class="proverka arhiv">
                  <span>В архиве</span>
                  <span class="nomer">№ 1-3325</span>
                </div>
              </div>
              <div id="svo-1">
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
                    <a class="file" href="#">Акт 1.pdf</a>
                  </div>
                </div>
              </div>
            </div>
            <button class="calaps" onclick="$('#svo-1').slideToggle()">
              Свернуть
            </button>
          </div>
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
                            <AdminCandidateMetrica metricId="g1user-1" />
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
                            <AdminCandidateMetrica metricId="g1user-2" />
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

  <div class="popup" id="popup1">
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
                  <input type="text" id="fio" name="fio" value="" />
                </div>
                <div class="item">
                  <label for="name">Имя</label>
                  <input type="text" id="name" name="name" value="" />
                </div>
              </div>
              <div class="box">
                <div class="item">
                  <label for="och">Отчество</label>
                  <input type="text" id="och" name="och" value="" />
                </div>
                <div class="item">
                  <div class="select">
                    <label for="pol">Пол</label>
                    <select name="pol" id="pol">
                      <option value="" disabled selected>Выбрать</option>
                      <option value="муж">муж</option>
                      <option value="жен">жен</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="box">
                <div class="item">
                  <label for="naci">Национальность</label>
                  <input type="text" id="naci" name="naci" value="" />
                </div>
                <div class="item">
                  <label for="roj">Место рождения</label>
                  <select name="roj" id="roj">
                    <option value="" disabled selected>Выбрать город</option>
                    <option value="Москва">Москва</option>
                    <option value="Санк-Петербург">Санк-Петербург</option>
                  </select>
                </div>
                <div class="item">
                  <label for="date">Дата рождения</label>
                  <input
                    type="text"
                    placeholder="__.__.____"
                    onfocus="(this.type='date')"
                    id="date"
                    name="date"
                    class="dats"
                  />
                </div>
                <div class="item">
                  <label for="sprav">Справка для пересдачи</label>
                  <input
                    type="text"
                    id="sprav"
                    name="sprav"
                    value=""
                    placeholder="Номер справки"
                  />
                </div>
              </div>
            </div>
            <div class="right">
              <div class="img">
                <img src="@/assets/img/ava.svg" alt="" />
                <span
                  >Фотография в формате .jpg, .jpeg или .png. Размер не более
                  2мб</span
                >
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
                  <select name="doc" id="doc">
                    <option value="Паспорт">Паспорт</option>
                    <option value="Свидетельство о рождении">
                      Свидетельство о рождении
                    </option>
                    <option value="Права">Права</option>
                  </select>
                </div>
                <div class="item doc_item_2">
                  <div select="select">
                    <label for="date_v">Дата выдачи</label>
                    <input
                      type="text"
                      placeholder="__.__.____"
                      onfocus="(this.type='date')"
                      id="date_v"
                      name="date_v"
                      class="dats"
                    />
                  </div>
                </div>
                <div class="item doc_item_3">
                  <label for="kem">Кем выдан</label>
                  <input type="text" id="kem" name="kem" value="" />
                </div>
                <div class="item doc_item_4">
                  <label for="cart">Миграционная карта</label>
                  <input type="text" id="cart" name="cart" value="" />
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
              <button type="button" class="btn save">Сохранить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminCandidateMetrica from "./elementComponents/CandidateMetrica.vue";
export default {
  name: "AdminBrancheView",
  components: {
    AdminCandidateMetrica,
  },
  mounted() {
    let self = this;
    this.$Jquery(".show_popup").click(function () {
      var popup_id = self.$Jquery(this).attr("rel");
      self.$Jquery("#" + popup_id).show();
    });

    this.$Jquery(".clouse").click(function () {
      self.$Jquery(".popup").hide();
      self.$Jquery("body").removeClass("hide");
    });
  },
  methods: {
    addGroup() {
      this.Swal.fire({
        
        input: "select",
        inputOptions: {
          SRB: "Вид на жительство",
          UKR: "Патент",
          HRV: "Гражданство",
        },
        inputPlaceholder: "Выбрать уровень",
        showCancelButton: true,
        confirmButtonText: 'Сохранить',
        confirmButtonColor: '#0079C1',
        cancelButtonText:'Отменить', 
           
       

      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>