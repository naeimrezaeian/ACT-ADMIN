<template>
     <div class="wrapper">
    <div class="box_widget">
        <div class="widget_category">
            <div class="title">Разделы</div>
            <div class="box">
                <div class="left">
                    <router-link to="Levels" class="level">УРОВНИ</router-link>
                    <router-link to="Module" class="moudle">МОДУЛИ</router-link>
                    <router-link to="Subjects" class="subtest">СУБТЕСТЫ</router-link>
                    <router-link to="Questions" class="question">БАЗА ВОПРОСОВ</router-link>
                    <router-link to="#" class="sef">СЕРТИФИКАТЫ</router-link>
                </div>
                <div class="right">
                    <a href="#" class="static">СТАТИСТИКА </a>
                    <a href="#" class="int">ИНТЕГРАЦИЯ</a>
                    <router-link to="Candidates" class="use">ТЕСТИРУЕМЫЕ</router-link>
                    <a href="#" class="arh">АРХИВ</a>
                    <router-link to="Log" class="log">ЛОГИ</router-link>
                </div>
            </div>
        </div>
        <div class="widget_state">
            <div class="top_panel">
                <div class="title">Статистика</div>
                <select>
                    <option value="" selected disabled>Неделя</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>
                <a href="#">Перейти в раздел</a>
            </div>
            <div class="box">
                <div class="item">
                    <div class="img">
                        <img src="@/assets/img/icon7.svg" alt="">
                    </div>
                    <div class="zag">Уровни</div>
                    <div class="num">4</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="@/assets/img/icon8.svg" alt="">
                    </div>
                    <div class="zag">Модули</div>
                    <div class="num">4</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="@/assets/img/icon9.svg" alt="">
                    </div>
                    <div class="zag">Субтесты</div>
                    <div class="num">15</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="@/assets/img/icon10.svg" alt="">
                    </div>
                    <div class="zag">Филиалы</div>
                    <div class="num">6</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="@/assets/img/icon11.svg" alt="">
                    </div>
                    <div class="zag">Города</div>
                    <div class="num">15</div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="@/assets/img/icon12.svg" alt="">
                    </div>
                    <div class="zag">Тестируемые</div>
                    <div class="num">123 678</div>
                </div>
            </div>
        </div>
        <div class="widget_filials">
            <div class="top_panel">
                <div class="title">Филиалы</div>
                <a href="#">Перейти в раздел</a>
            </div>
            <div class="table">
                <table>
                    <tbody>
                    <tr>
                        <th>Филиал</th>
                        <th>Ответственный</th>
                        <th>Арес</th>
                    </tr>
                    <tr>
                        <td><a href="#">Филиал С.-Петербург</a></td>
                        <td>Фамилия И.О.</td>
                        <td>Город, улица, дом</td>
                    </tr>
                    <tr>
                        <td><a href="#">Филиал С.-Петербург</a></td>
                        <td>Фамилия И.О.</td>
                        <td>Город, улица, дом</td>
                    </tr>
                    <tr>
                        <td><a href="#">Филиал С.-Петербург</a></td>
                        <td>Фамилия И.О.</td>
                        <td>Город, улица, дом</td>
                    </tr>
                    <tr>
                        <td><a href="#">Филиал С.-Петербург</a></td>
                        <td>Фамилия И.О.</td>
                        <td>Город, улица, дом</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="widget_graf">
            <div class="top_panel">
                <div class="title">График</div>
                <a href="#">Перейти в раздел</a>
            </div>
            <div class="box">
                <div class="left">
                    <select>
                        <option value="" selected disabled>Не сдали</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                    <select>
                        <option value="" selected disabled>Успешно завершили</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                    <select>
                        <option value="" selected disabled>Неделя</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                </div>
                <div class="right">
                    <v-chart id="chart-container" class="chart" :option="option" />
                </div>
            </div>
        </div>
        <div class="widget_level">
            <div class="top_panel">
                <div class="title">Уровни</div>
                <a href="#">Перейти в раздел</a>
            </div>
            <div class="table">
                <table>
                    <tbody>
                    <tr>
                        <th>Название</th>
                        <th>Ответственный</th>
                        <th>Дата создания</th>
                    </tr>
                    <tr>
                        <td><a href="#">Уровень 1</a></td>
                        <td>Фамилия И.О.</td>
                        <td>12.04.2022</td>
                    </tr>
                    <tr>
                        <td><a href="#">Уровень 2</a></td>
                        <td>Фамилия И.О.</td>
                        <td>01.04.2022</td>
                    </tr>
                    <tr>
                        <td><a href="#">Уровень 3</a></td>
                        <td>Фамилия И.О.</td>
                        <td>27.03.2022</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="widget_subtest">
            <div class="top_panel">
                <div class="title">Субтесты</div>
                <a href="#">Перейти в раздел</a>
            </div>
            <div class="table">
                <table>
                    <tbody>
                    <tr>
                        <th>Уровень</th>
                        <th>Модуль</th>
                        <th>База вопросов</th>
                    </tr>
                    <tr>
                        <td><a href="#">Аудирование по русскому языку</a></td>
                        <td>Название</td>
                        <td>Название базы</td>
                    </tr>
                    <tr>
                        <td><a href="#">Чтение по русскому языку</a></td>
                        <td>Название</td>
                        <td>Название базы</td>
                    </tr>
                    <tr>
                        <td><a href="#">Письмо по русскому языку</a></td>
                        <td>Название</td>
                        <td>Название базы</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="widget_faq">
            <div class="top_panel">
                <div class="title">Базы вопросов</div>
                <a href="#">Перейти в раздел</a>
            </div>
            <div class="table">
                <table>
                    <tbody>
                    <tr>
                        <th>Название</th>
                        <th>Ответственный</th>
                        <th>Дата создания</th>
                    </tr>
                    <tr>
                        <td><a href="#">База вопросов 1</a></td>
                        <td>Фамилия И.О.</td>
                        <td>12.04.2022</td>
                    </tr>
                    <tr>
                        <td><a href="#">База вопросов 2</a></td>
                        <td>Фамилия И.О.</td>
                        <td>01.04.2022</td>
                    </tr>
                    <tr>
                        <td><a href="#">База вопросов 3</a></td>
                        <td>Фамилия И.О.</td>
                        <td>27.03.2022</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="widget_grup">
            <div class="top_panel">
                <div class="title">Группы тестируемых</div>
                <a href="#">Перейти в раздел</a>
            </div>
            <div class="table">
                <table>
                    <tbody>
                    <tr>
                        <th>Группа</th>
                        <th>Уровень</th>
                        <th>Кол-во</th>
                        <th>Статус</th>
                    </tr>
                    <tr>
                        <td><a href="#">Название группы</a></td>
                        <td>Гражданство</td>
                        <td>20</td>
                        <td>Активно</td>
                    </tr>
                    <tr>
                        <td><a href="#">Название группы</a></td>
                        <td>Патент</td>
                        <td>11</td>
                        <td>Активно</td>
                    </tr>
                    <tr>
                        <td><a href="#">Название группы</a></td>
                        <td>Гражданство</td>
                        <td>6</td>
                        <td>Отмена</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="widget_zayvka">
            <div class="top_panel">
                <div class="title">Заявки</div>
                <a href="#">Перейти в раздел</a>
            </div>
            <div class="table">
                <table>
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Дата</th>
                        <th>Тема</th>
                        <th>Статус</th>
                    </tr>
                    <tr>
                        <td><a href="#">132-56</a></td>
                        <td>23.02.2022</td>
                        <td>Ошибка регистрации</td>
                        <td>Открыта</td>
                    </tr>
                    <tr>
                        <td><a href="#">132-54</a></td>
                        <td>14.03.2022</td>
                        <td>Проблема со входом</td>
                        <td>Закрыто</td>
                    </tr>
                    <tr>
                        <td><a href="#">100-23</a></td>
                        <td>15.03.2022</td>
                        <td>Забыл пароль</td>
                        <td>Закрыто</td>
                    </tr>
                    <tr>
                        <td><a href="#">132-56</a></td>
                        <td>23.02.2022</td>
                        <td>Ошибка регистрации</td>
                        <td>Открыта</td>
                    </tr>
                    <tr>
                        <td><a href="#">132-54</a></td>
                        <td>14.03.2022</td>
                        <td>Проблема со входом</td>
                        <td>Закрыто</td>
                    </tr>
                    <tr>
                        <td><a href="#">100-23</a></td>
                        <td>15.03.2022</td>
                        <td>Забыл пароль</td>
                        <td>Закрыто</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="widget_integrace">
            <div class="top_panel">
                <div class="title">Интеграция</div>
                <a href="#">Перейти в раздел</a>
            </div>
            <div class="table">
                <table>
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Ключ</th>
                        <th>Дата</th>
                        <th>Статус</th>
                        <th>Ключ предоставлен</th>
                    </tr>
                    <tr>
                        <td><a href="#">132-56</a></td>
                        <td>DFCD-1234-WXYZ-5577</td>
                        <td>23.02.2022</td>
                        <td>Активен</td>
                        <td>Иванов Н.В.</td>
                    </tr>
                    <tr>
                        <td><a href="#">132-54</a></td>
                        <td>NTCD-1234-WXYZ-9900</td>
                        <td>14.03.2022</td>
                        <td>Деактивирован</td>
                        <td>Смирнов П.В.</td>
                    </tr>
                    <tr>
                        <td><a href="#">132-56</a></td>
                        <td>DFCD-1234-WXYZ-5577</td>
                        <td>23.02.2022</td>
                        <td>Активен</td>
                        <td>Иванов Н.В.</td>
                    </tr>
                    <tr>
                        <td><a href="#">132-54</a></td>
                        <td>NTCD-1234-WXYZ-9900</td>
                        <td>14.03.2022</td>
                        <td>Деактивирован</td>
                        <td>Смирнов П.В.</td>
                    </tr>
                    <tr>
                        <td><a href="#">132-56</a></td>
                        <td>DFCD-1234-WXYZ-5577</td>
                        <td>23.02.2022</td>
                        <td>Активен</td>
                        <td>Иванов Н.В.</td>
                    </tr>
                    <tr>
                        <td><a href="#">132-56</a></td>
                        <td>DFCD-1234-WXYZ-5577</td>
                        <td>23.02.2022</td>
                        <td>Активен</td>
                        <td>Иванов Н.В.</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="widget_arhiv">
            <div class="top_panel">
                <div class="title">Архив</div>
                <a href="#">Перейти в раздел</a>
            </div>
            <div class="table">
                <table>
                    <tbody>
                    <tr>
                        <th>Группа</th>
                        <th>Уровень</th>
                        <th>Кол-во</th>
                        <th>Статус</th>
                    </tr>
                    <tr>
                        <td><a href="#">Название группы</a></td>
                        <td>Гражданство</td>
                        <td>20</td>
                        <td>В архиве</td>
                    </tr>
                    <tr>
                        <td><a href="#">Название группы</a></td>
                        <td>Патент</td>
                        <td>11</td>
                        <td>В архиве</td>
                    </tr>
                    <tr>
                        <td><a href="#">Название группы</a></td>
                        <td>Гражданство</td>
                        <td>6</td>
                        <td>В архиве</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="widget_users">
            <div class="top_panel">
                <div class="title">Пользователи</div>
                <a href="#">Перейти в раздел</a>
            </div>
            <div class="table">
                <table>
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Роль</th>
                        <th>ФИО</th>
                        <th>Активность</th>
                    </tr>
                    <tr>
                        <td><a href="#">132-56</a></td>
                        <td>Администратор</td>
                        <td>Ковальский И.И.</td>
                        <td>10:00 20.05.21</td>
                    </tr>
                    <tr>
                        <td><a href="#">132-54</a></td>
                        <td>Пользователь</td>
                        <td>Нурмагомедов А.А.</td>
                        <td>21:00 20.05.21</td>
                    </tr>
                    <tr>
                        <td><a href="#">100-23</a></td>
                        <td>Испытуемый</td>
                        <td>Погосян А.В.</td>
                        <td>12:04 20.05.21</td>
                    </tr>
                    <tr>
                        <td><a href="#">34-5</a></td>
                        <td>Суперадмин</td>
                        <td>Мусинян М.Н.</td>
                        <td>12:04 20.05.21</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="widget_sertifikat">
            <div class="top_panel">
                <div class="title">Сертификаты</div>
                <a href="#">Перейти в раздел</a>
            </div>
            <div class="table">
                <table>
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Роль</th>
                        <th>ФИО</th>
                        <th>Активность</th>
                    </tr>
                    <tr>
                        <td><a href="#">132-56</a></td>
                        <td>Администратор</td>
                        <td>Ковальский И.И.</td>
                        <td>10:00 20.05.21</td>
                    </tr>
                    <tr>
                        <td><a href="#">132-54</a></td>
                        <td>Пользователь</td>
                        <td>Нурмагомедов А.А.</td>
                        <td>21:00 20.05.21</td>
                    </tr>
                    <tr>
                        <td><a href="#">100-23</a></td>
                        <td>Испытуемый</td>
                        <td>Погосян А.В.</td>
                        <td>12:04 20.05.21</td>
                    </tr>
                    <tr>
                        <td><a href="#">34-5</a></td>
                        <td>Суперадмин</td>
                        <td>Мусинян М.Н.</td>
                        <td>12:04 20.05.21</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="widget_otchet">
            <div class="top_panel">
                <div class="title">Отчеты</div>
                <a href="#">Перейти в раздел</a>
            </div>
            <div class="table">
                <table>
                    <tbody>
                    <tr>
                        <th>Название</th>
                        <th>Страна</th>
                        <th>Город</th>
                        <th>Филиал</th>
                        <th>Даты</th>
                    </tr>
                    <tr>
                        <td><a href="#">Отчет от 24.04.2022</a></td>
                        <td>Любая</td>
                        <td>Москва</td>
                        <td>Филиал 1</td>
                        <td>23.04.2022-23.05.2022</td>
                    </tr>
                    <tr>
                        <td><a href="#">Отчет от 29.04.2022</a></td>
                        <td>Молдова</td>
                        <td>Москва</td>
                        <td>Филиал 2</td>
                        <td>01.05.2022-09.05.2022</td>
                    </tr>
                    <tr>
                        <td><a href="#">Отчет от 01.05.2022</a></td>
                        <td>Казахстан</td>
                        <td>Москва</td>
                        <td>Филиал 3</td>
                        <td>01.05.2022-05.05.2022</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="widget_suport">
            <div class="top_panel">
                <div class="title">Сообщения поддержки</div>
                <a href="#">Перейти в раздел</a>
            </div>
            <div class="table">
                <table>
                    <tbody>
                    <tr>
                        <td><img src="@/assets/img/mail.svg" alt=""></td>
                        <td><a href="#">Иванов И.В.</a></td>
                        <td>Скажате пожалуйста, могу ли я пересдать экзамен в третий раз в эту пятницу? ....</td>
                        <td>07.05.2022 10:14</td>
                    </tr>
                    <tr>
                        <td><img src="@/assets/img/mail1.svg" alt=""></td>
                        <td><a href="#">Иванов И.В.</a></td>
                        <td>Скажате пожалуйста, могу ли я пересдать экзамен в третий раз в эту пятницу? ....</td>
                        <td>06.05.2022 15:46</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="widget_open">
            <div class="top_panel">
                <div class="title">Задания на проверку</div>
                <a href="#">Перейти в раздел</a>
            </div>
            <div class="table">
                <table>
                    <tbody>
                    <tr>
                        <th>Название</th>
                        <th>Филиал</th>
                        <th>Проверяющий</th>
                        <th>Дата</th>
                        <th>Статус</th>
                    </tr>
                    <tr>
                        <td><a href="#">Название задания</a></td>
                        <td>Филиал 1</td>
                        <td>Погосян А.В.</td>
                        <td>23.04.2022</td>
                        <td>Не проверено</td>
                    </tr>
                    <tr>
                        <td><a href="#">Отчет от 29.04.2022</a></td>
                        <td>Филиал 2</td>
                        <td>Нурмагомедов А.А.</td>
                        <td>01.05.2022</td>
                        <td>Не проверено</td>
                    </tr>
                    <tr>
                        <td><a href="#">Отчет от 01.05.2022</a></td>
                        <td>Филиал 3</td>
                        <td>Ковальский И.И.</td>
                        <td>05.05.2022</td>
                        <td>Не проверено</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart from 'vue-echarts'; 
import { ref } from 'vue';
   
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);
export default {

    name:'AdminDashboard',
    components:{
        VChart
    },


    created(){
       

    },
    mounted(){
    
    },
    setup() {
        
 
    const option = ref({
      
        tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '20',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        
      ]
    }
  ]
     
    });

    return { option };
}



}
</script>

<style>

</style>