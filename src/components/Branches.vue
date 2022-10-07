<template>
  <div class="wrapper">
    <div class="head filial">
        <h1>ФИЛИАЛЫ</h1>
        <div class="bot">
            <router-link :to="{ path: 'Branches/Add'}" class="add">Добавить филиал</router-link>
        </div>
    </div>
    <div class="serch">
        <form>
            <div class="box">
                <input type="text" placeholder="Выбрать период" onfocus="(this.type='date')" class="dats">
                <select>
                    <option value="" disabled selected>Выбрать город</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <select>
                    <option value="" disabled selected>Выбрать ответственного</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div class="box">
                <input type="text" class="serch_in" value="" placeholder="Напишите запрос для поиска или код филиала">
                <span class="lup"></span>
                <button type="button" class="btn">Поиск</button>
            </div>
        </form>
    </div>
    <div class="vopros">
        <div class="table filials">
            <table>
                <tbody>
                <tr>
                    <th>Код филиала</th>
                    <th>Название</th>
                    <th>Ответственный</th>
                    <th>Город</th>
                    <th>Контакты</th>
                </tr>
                <tr>
                    <td>3378</td>
                    <td>
                        <router-link to="Branches/1" >ШОМП Санкт-Петербург</router-link>
                    </td>
                    <td>Нурмагомедов Н.И.</td>
                    <td>Москва</td>
                    <td>8 (800) 123-45-67</td>
                </tr>
                <tr>
                    <td>3378</td>
                    <td>
                        <router-link to="Branches/2">ШОМП Санкт-Петербург</router-link>
                    </td>
                    <td>Нурмагомедов Н.И.</td>
                    <td>Москва</td>
                    <td>8 (800) 123-45-67</td>
                </tr>
                <tr>
                    <td>3378</td>
                    <td>
                        <router-link to="Branches/3">ШОМП Санкт-Петербург</router-link>
                    </td>
                    <td>Нурмагомедов Н.И.</td>
                    <td>Москва</td>
                    <td>8 (800) 123-45-67</td>
                </tr>
                <tr>
                    <td>3378</td>
                    <td>
                        <router-link to="Branches/4">ШОМП Санкт-Петербург</router-link>
                    </td>
                    <td>Нурмагомедов Н.И.</td>
                    <td>Москва</td>
                    <td>8 (800) 123-45-67</td>
                </tr>
                <tr>
                    <td>3378</td>
                    <td>
                        <router-link to="Branches/5">ШОМП Санкт-Петербург</router-link>
                    </td>
                    <td>Нурмагомедов Н.И.</td>
                    <td>Москва</td>
                    <td>8 (800) 123-45-67</td>
                </tr>
                <tr>
                    <td>3378</td>
                    <td>
                        <router-link to="Branches/6">ШОМП Санкт-Петербург</router-link>
                    </td>
                    <td>Нурмагомедов Н.И.</td>
                    <td>Москва</td>
                    <td>8 (800) 123-45-67</td>
                </tr>
                <tr>
                    <td>3378</td>
                    <td>
                        <router-link to="Branches/7">ШОМП Санкт-Петербург</router-link>
                    </td>
                    <td>Нурмагомедов Н.И.</td>
                    <td>Москва</td>
                    <td>8 (800) 123-45-67</td>
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
        name:"AdminBranches"
    }
</script>

<style lang="scss" scoped>

</style>