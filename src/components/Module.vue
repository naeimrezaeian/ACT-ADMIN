<template>
    <div class="wrapper">
    <div class="head mini">
        <h1>МОДУЛИ</h1>
        <div class="bot">
            <router-link to="Module/Add" class="add">Создать модуль</router-link>
        </div>
    </div>
    <div class="serch">
        <form>
            <div class="box">
                <input type="text" class="serch_in" value="" placeholder="Поиск по названию">
                <span class="lup"></span>
                <button type="button" class="btn">Поиск</button>
            </div>
            <div class="box">
               <select>
                    <option value="" disabled selected>Выбрать уровень</option>
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
                <div class="bot">
                    <button type="button" class="rezet">Сбросить фильтры</button>
                </div>
            </div>
        </form>
    </div>
    <div class="grup_test">
        <div class="panel">
            <div class="left">
                <div class="chek">
                    <input type="checkbox" id="all" value="" class="checkbox">
                    <label for="all">Выбрать все</label>
                </div>
                <button type="button" class="delete">Удалить выбранные</button>
                <button type="button" class="arhiv">Архивировать</button>
            </div>
        </div>
        <div class="table">
            <table>
                <tbody>
                <tr>
                    <th></th>
                    <th>Название модуля</th>
                    <th>Уровень</th>  
                    <th>Дата создания</th>
                    <th>Создатель</th>                   
                    <th>Описание</th>                   
                    <th>Статус</th>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" id="all_1" value="" class="checkbox">
                        <label for="all_1"></label>
                    </td>
                    <td>
                        <button class="link">Название модуля</button>
                    </td>
                    <td>Патент</td>
                    <td>10.12.2021</td>
                    <td>Кулебяка Г.В.</td>
                    <td>время прохождения 30 мин,общая оценка 70 баллов</td>
                    <td>Активна</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" id="all_2" value="" class="checkbox">
                        <label for="all_2"></label>
                    </td>
                    <td>
                        <button class="link">Название модуля</button>
                    </td>
                    <td>Патент</td>
                    <td>10.12.2021</td>
                    <td>Кулебяка Г.В.</td>
                    <td>время прохождения 30 мин,общая оценка 70 баллов</td>
                    <td>Активна</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" id="all_3" value="" class="checkbox">
                        <label for="all_3"></label>
                    </td>
                    <td>
                        <button class="link">Название модуля</button>
                    </td>
                    <td>Патент</td>
                    <td>10.12.2021</td>
                    <td>Кулебяка Г.В.</td>
                    <td>время прохождения 30 мин,общая оценка 70 баллов</td>
                    <td>Активна</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" id="all_4" value="" class="checkbox">
                        <label for="all_4"></label>
                    </td>
                    <td>
                        <button class="link">Название модуля</button>
                    </td>
                    <td>Патент</td>
                    <td>10.12.2021</td>
                    <td>Кулебяка Г.В.</td>
                    <td>время прохождения 30 мин,общая оценка 70 баллов</td>
                    <td>Активна</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" id="all_5" value="" class="checkbox">
                        <label for="all_5"></label>
                    </td>
                    <td>
                        <button class="link">Название модуля</button>
                    </td>
                    <td>Патент</td>
                    <td>10.12.2021</td>
                    <td>Кулебяка Г.В.</td>
                    <td>время прохождения 30 мин,общая оценка 70 баллов</td>
                    <td>Активна</td>
                </tr>
               
               
              
              
                </tbody>
            </table>
        </div>
            <div class="pagin">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="prev page-link" href="#"><img src="@/assets/img/arrow1.svg" alt=""></a>
                    </li>
                    <li class="page-item active">
                        <span class="page-link current">1</span>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">4</a>
                    </li>
                    <li class="page-item">
                        <span class="page-link">...</span>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">11</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">12</a>
                    </li>
                    <li class="page-item">
                        <a class="nextpage-link" href="#"><img src="@/assets/img/arrow2.svg" alt=""></a>
                    </li>
                </ul>
            </div>
    </div>
</div>
</template>

<script>
    export default {
        name:"AdminModule"
    }
</script>

<style lang="scss" scoped>

</style>