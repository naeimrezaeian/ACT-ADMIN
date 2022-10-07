<template>
    <div class="wrapper">
       
    <div class="head filial">
        <h1>ПОЛЬЗОВАТЕЛИ</h1>
        <div class="botuser">
            <router-link :to="{ path: 'Users/Add'}" class="add" >Добавить пользователя </router-link>
        </div>
    </div>
    <div class="serch">
        <form>
            <div class="box">
                <select>
                    <option value="" disabled selected>Выбрать статус</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <select>
                    <option value="" disabled selected>Выбрать город</option>
                    <option value="1">1</option>
                    <option value="2">2</option>    
                    <option value="3">3</option>
                </select>
                <select>
                    <option value="" disabled selected>Выбрать филиал</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div class="box">
                <input type="text" class="serch_in" value="" placeholder="Поиск по фамилии">
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
                    <th>ФИО</th>
                    <th>Город</th>
                    <th>Филиал</th>
                    <th>email</th>
                    <th>Роль в системе</th>
                    <th>Статус </th>
                </tr>
                <tr>
                    <td>
                        <router-link to="Users/1" >Козырева Анна Владимировна</router-link>
                    </td>
                    <td>Москва</td>                    
                    <td>Филиал №1</td>                  
                    <td>ana_vladirovna200@exam.ru</td>
                    <td>Администратор</td>
                    <td>Активный</td>
                </tr>
                <tr>
                    <td>
                        <router-link to="Users/2">Белов Михаил Тимофеевич</router-link>
                    </td>
                    <td>Санкт-Петербург</td>                    
                    <td>Филиал №2</td>                  
                    <td>ivanovav@exam.ru              </td>
                    <td>Пользователь   </td>
                    <td>Требуется проверка</td>
                </tr>
                <tr>
                    <td>
                        <router-link to="Users/3">Козырева Анна Владимировна</router-link>
                    </td>
                    <td>Москва</td>                    
                    <td>Филиал №1</td>                  
                    <td>ana_vladirovna200@exam.ru</td>
                    <td>Администратор</td>
                    <td>Активный</td>
                </tr>
                <tr>
                    <td>
                        <router-link to="Users/4">Белов Михаил Тимофеевич</router-link>
                    </td>
                    <td>Санкт-Петербург</td>                    
                    <td>Филиал №2</td>                  
                    <td>ivanovav@exam.ru              </td>
                    <td>Пользователь   </td>
                    <td>Требуется проверка</td>
                </tr>
                <tr>
                    <td>
                        <router-link to="Users/5">Козырева Анна Владимировна</router-link>
                    </td>
                    <td>Москва</td>                    
                    <td>Филиал №1</td>                  
                    <td>ana_vladirovna200@exam.ru</td>
                    <td>Администратор</td>
                    <td>Активный</td>
                </tr>
                <tr>
                    <td>
                        <router-link to="Users/6">Белов Михаил Тимофеевич</router-link>
                    </td>
                    <td>Санкт-Петербург</td>                    
                    <td>Филиал №2</td>                  
                    <td>ivanovav@exam.ru              </td>
                    <td>Пользователь   </td>
                    <td>Требуется проверка</td>
                </tr>
                <tr>
                    <td>
                        <router-link to="Users/7">Козырева Анна Владимировна</router-link>
                    </td>
                    <td>Москва</td>                    
                    <td>Филиал №1</td>                  
                    <td>ana_vladirovna200@exam.ru</td>
                    <td>Администратор</td>
                    <td>Активный</td>
                </tr>
                <tr>
                    <td>
                        <router-link to="Users/8">Белов Михаил Тимофеевич</router-link>
                    </td>
                    <td>Санкт-Петербург</td>                    
                    <td>Филиал №2</td>                  
                    <td>ivanovav@exam.ru              </td>
                    <td>Пользователь   </td>
                    <td>Требуется проверка</td>
                </tr>
                
                </tbody>
            </table>
        </div>
        <div class="pagin">
            <ul class="pagination">
                <li class="page-item">
                    <a class="prev page-link" href="#"><img src="img/arrow1.svg" alt=""></a>
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
                    <a class="nextpage-link" href="#"><img src="img/arrow2.svg" alt=""></a>
                </li>
            </ul>
        </div>
        
    </div>
    
</div>
</template>

<script>
    export default {
        name:'AdminUsers',
    }
</script>

<style lang="scss" scoped>

</style>