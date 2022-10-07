<template>
    <div class="wrapper">
    <div class="head mini">
        <h1>СУБТЕСТЫ</h1>
        <div class="bot">
            <router-link to="Subjects/Add" class="add">Создать субтест</router-link>
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
                    <option value="" disabled selected>Выбрать модуль</option>
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
                
            </div>
        </div>
        <div class="table">
            <table>
                <tbody>
                <tr>
                    <th></th>
                    <th>Название субтест</th>
                    <th>Уровень</th>  
                    <th>Модуль</th>
                    <th>Дата создания</th>                   
                    <th>Создатель</th>                   
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
                    <td>Русский язык</td>
                    <td>10.12.2021</td>
                    <td>Кулебяка Г.В.</td>
                    <td>Активна</td>
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
                    <td>Русский язык</td>
                    <td>10.12.2021</td>
                    <td>Кулебяка Г.В.</td>
                    <td>Активна</td>
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
                    <td>Русский язык</td>
                    <td>10.12.2021</td>
                    <td>Кулебяка Г.В.</td>
                    <td>Активна</td>
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
                    <td>Русский язык</td>
                    <td>10.12.2021</td>
                    <td>Кулебяка Г.В.</td>
                    <td>Активна</td>
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
                    <td>Русский язык</td>
                    <td>10.12.2021</td>
                    <td>Кулебяка Г.В.</td>
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
        name:"AdminSubject"
        
    }
</script>

<style lang="scss" scoped>

</style>