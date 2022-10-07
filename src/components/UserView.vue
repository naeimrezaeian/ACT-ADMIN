<template>
   <div class="wrapper">
    <div class="head">
        <h1>РЕДАКТИРОВАНИЕ ПРОФИЛЯ ПОЛЬЗОВАТЕЛЯ</h1>
    </div>
    <div class="all_info">
        <div class="title">Общая информация</div>
        <form>
            <div class="left">
                <div class="box">
                    <div class="item">
                        <label for="fio">Фамилия</label>
                        <input type="text" id="fio" name="fio" value="">
                    </div>
                    <div class="item">
                        <label for="name">Имя</label>
                        <input type="text" id="name" name="name" value="">
                    </div>
                </div>
                <div class="box">
                    <div class="item">
                        <label for="och">Отчество</label>
                        <input type="text" id="och" name="och" value="">
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
                        <div class="select">
                            <label for="date">Дата рождения</label>
                            <input type="text" placeholder="__.__.____" onfocus="(this.type='date')" id="date" name="date">
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="item">
                        <label for="naci">Адрес электронной почты</label>
                        <input type="text" id="naci" name="naci" value="">
                    </div>
                    <div class="item">
                        <div class="select">
                            <label for="pol">Роль</label>
                            <select name="pol" id="pol">
                                <option value="" disabled selected>Выбрать</option>
                                <option value="муж">муж</option>
                                <option value="жен">жен</option>
                            </select>
                        </div> 
                        <div class="select">
                            <label for="roj">Филиал</label>
                            <select name="roj" id="roj" class="usereditselect" >
                                <option value="" disabled selected>Выбрать</option>
                                <option value="муж">муж</option>
                                <option value="жен">жен</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div class="box">
                    <div class="item">
                        <label for="naci">Пароль</label>
                    <input type="text" id="naci" name="naci" value="">
                        </div>

                        <div class="item">
                            <div class="select">
                                <label for="pol">Статус</label>
                                <select name="pol" id="pol">
                                    <option value="" disabled selected>Выбрать</option>
                                    <option value="муж">муж</option>
                                    <option value="жен">жен</option>
                                </select>
                            </div> 
                          
                        </div>
                </div>

                <div class="usereditaccess">
                    <div class="title">Дополнительно</div>
        
                    <div class="docs"  > 
                        <div class="left" style="width: 100%;">             
                        <div class="box" >
                            
                            <div class="item">
                                <input type="checkbox" id="atribut1" value="" class="checkbox">
                                <label for="atribut1">Подписание счёта</label>        
                                <input type="checkbox" id="atribut2" value="" class="checkbox">
                                <label for="atribut2">Подписание сертификата</label>
                                <input type="checkbox" id="atribut3" value="" class="checkbox">
                                <label for="atribut3">Подписание приложения </label>
                                <input type="checkbox" id="atribut4" value="" class="checkbox">
                                <label for="atribut4">Справка</label>
                                <input type="checkbox" id="atribut5" value="" class="checkbox">
                                <label for="atribut5">Активность базы</label>
                            </div>
                            <div class="item">
                                <input type="checkbox" id="atribut6" value="" class="checkbox">
                                <label for="atribut6">Подписание счёта</label>
        
                                <input type="checkbox" id="atribut7" value="" class="checkbox">
                                <label for="atribut7">Подписание сертификата</label>
                                <input type="checkbox" id="atribut8" value="" class="checkbox">
                                <label for="atribut8">Подписание приложения</label>
                                <input type="checkbox" id="atribut9" value="" class="checkbox">
                                <label for="atribut9">Справка</label>
                                <input type="checkbox" id="atribut10" value="" class="checkbox">
                                <label for="atribut10">Активность базы</label>
                            </div>
                            
                            
                        </div>
                    </div>
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
           
            <div class="botom">
                <button type="button" class="btn delete ">Удалить профиль</button>
                <router-link to="/Users" type="button" class="btn otmena" >Отменить</router-link>
                <button type="button" class="btn save" >Сохранить</button>
                
            </div>
        </form>
    </div>
   
</div>
</template>

<script>
    export default {
        name:"AdminUserView"
    }
</script>

<style lang="scss" scoped>

</style>