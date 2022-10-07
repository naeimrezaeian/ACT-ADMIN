<template>
    <div class="wrapper">
    <div class="head">
        <h1>БАЗА ВОПРОСОВ</h1>
        <div class="bot">
            <button type="button" class="add show_popup" rel="popup1">Создать базу</button>
        </div>
    </div>
    <div class="serch">
        <form>
            <div class="box">
                <input type="text" class="serch_in" value="" placeholder="Поиск по составителю или вопросу">
                <span class="lup"></span>
                <button type="button" class="btn">Найти</button>
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
                    <option value="" disabled selected>Выбрать субтест</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <select>
                    <option value="" disabled selected>Статус базы</option>
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
    <div class="articl">
        <div class="box">
            <div class="item">
                <div class="top_zag">
                    <div class="zag">База вопросов 1 название в 2 строки</div>
                    <button type="button" class="delete"></button>
                    <button type="button" class="edit"></button>
                </div>
                <ul class="spisok">
                    <li>
                        <span>Уровень</span>
                        <strong>Гражданство</strong>
                    </li>
                    <li>
                        <span>Модуль</span>
                        <strong>Русский язык</strong>
                    </li>
                    <li>
                        <span>Субтест</span>
                        <strong>Письмо</strong>
                    </li>
                    <li>
                        <span>Всего</span>
                        <strong>9 вопросов</strong>
                    </li>
                    <li>
                        <span>Тип</span>
                        <strong>Текст</strong>
                    </li>
                    <li>
                        <span>Составитель</span>
                        <strong>Смирнов И.В.</strong>
                    </li>
                </ul>
                <router-link to="Questions/1" class="btn">Просмотр</router-link>
            </div>
            <div class="item">
                <div class="top_zag">
                    <div class="zag">База вопросов 1 название в 2 строки</div>
                    <button type="button" class="delete"></button>
                    <button type="button" class="edit"></button>
                </div>
                <ul class="spisok">
                    <li>
                        <span>Уровень</span>
                        <strong>Гражданство</strong>
                    </li>
                    <li>
                        <span>Модуль</span>
                        <strong>Русский язык</strong>
                    </li>
                    <li>
                        <span>Субтест</span>
                        <strong>Письмо</strong>
                    </li>
                    <li>
                        <span>Всего</span>
                        <strong>9 вопросов</strong>
                    </li>
                    <li>
                        <span>Тип</span>
                        <strong>Текст</strong>
                    </li>
                    <li>
                        <span>Составитель</span>
                        <strong>Смирнов И.В.</strong>
                    </li>
                </ul>
                <router-link to="Questions/2" class="btn">Просмотр</router-link>
            </div>
            <div class="item">
                <div class="top_zag">
                    <div class="zag">База вопросов 1 название в 2 строки</div>
                    <button type="button" class="delete"></button>
                    <button type="button" class="edit"></button>
                </div>
                <ul class="spisok">
                    <li>
                        <span>Уровень</span>
                        <strong>Гражданство</strong>
                    </li>
                    <li>
                        <span>Модуль</span>
                        <strong>Русский язык</strong>
                    </li>
                    <li>
                        <span>Субтест</span>
                        <strong>Письмо</strong>
                    </li>
                    <li>
                        <span>Всего</span>
                        <strong>9 вопросов</strong>
                    </li>
                    <li>
                        <span>Тип</span>
                        <strong>Текст</strong>
                    </li>
                    <li>
                        <span>Составитель</span>
                        <strong>Смирнов И.В.</strong>
                    </li>
                </ul>
                <router-link to="Questions/2" class="btn">Просмотр</router-link>
            </div>
            <div class="item">
                <div class="top_zag">
                    <div class="zag">База вопросов 1 название в 2 строки</div>
                    <button type="button" class="delete"></button>
                    <button type="button" class="edit"></button>
                </div>
                <ul class="spisok">
                    <li>
                        <span>Уровень</span>
                        <strong>Гражданство</strong>
                    </li>
                    <li>
                        <span>Модуль</span>
                        <strong>Русский язык</strong>
                    </li>
                    <li>
                        <span>Субтест</span>
                        <strong>Письмо</strong>
                    </li>
                    <li>
                        <span>Всего</span>
                        <strong>9 вопросов</strong>
                    </li>
                    <li>
                        <span>Тип</span>
                        <strong>Текст</strong>
                    </li>
                    <li>
                        <span>Составитель</span>
                        <strong>Смирнов И.В.</strong>
                    </li>
                </ul>
                <router-link to="Questions/3" class="btn">Просмотр</router-link>
            </div>
            <div class="item">
                <div class="top_zag">
                    <div class="zag">База вопросов 1 название в 2 строки</div>
                    <button type="button" class="delete"></button>
                    <button type="button" class="edit"></button>
                </div>
                <ul class="spisok">
                    <li>
                        <span>Уровень</span>
                        <strong>Гражданство</strong>
                    </li>
                    <li>
                        <span>Модуль</span>
                        <strong>Русский язык</strong>
                    </li>
                    <li>
                        <span>Субтест</span>
                        <strong>Письмо</strong>
                    </li>
                    <li>
                        <span>Всего</span>
                        <strong>9 вопросов</strong>
                    </li>
                    <li>
                        <span>Тип</span>
                        <strong>Текст</strong>
                    </li>
                    <li>
                        <span>Составитель</span>
                        <strong>Смирнов И.В.</strong>
                    </li>
                </ul>
                <router-link to="Questions/4" class="btn">Просмотр</router-link>
            </div>
            <div class="item">
                <div class="top_zag">
                    <div class="zag">База вопросов 1 название в 2 строки</div>
                    <button type="button" class="delete"></button>
                    <button type="button" class="edit"></button>
                </div>
                <ul class="spisok">
                    <li>
                        <span>Уровень</span>
                        <strong>Гражданство</strong>
                    </li>
                    <li>
                        <span>Модуль</span>
                        <strong>Русский язык</strong>
                    </li>
                    <li>
                        <span>Субтест</span>
                        <strong>Письмо</strong>
                    </li>
                    <li>
                        <span>Всего</span>
                        <strong>9 вопросов</strong>
                    </li>
                    <li>
                        <span>Тип</span>
                        <strong>Текст</strong>
                    </li>
                    <li>
                        <span>Составитель</span>
                        <strong>Смирнов И.В.</strong>
                    </li>
                </ul>
                <router-link to="Questions/5" class="btn">Просмотр</router-link>
            </div>
            <div class="item">
                <div class="top_zag">
                    <div class="zag">База вопросов 1 название в 2 строки</div>
                    <button type="button" class="delete"></button>
                    <button type="button" class="edit"></button>
                </div>
                <ul class="spisok">
                    <li>
                        <span>Уровень</span>
                        <strong>Гражданство</strong>
                    </li>
                    <li>
                        <span>Модуль</span>
                        <strong>Русский язык</strong>
                    </li>
                    <li>
                        <span>Субтест</span>
                        <strong>Письмо</strong>
                    </li>
                    <li>
                        <span>Всего</span>
                        <strong>9 вопросов</strong>
                    </li>
                    <li>
                        <span>Тип</span>
                        <strong>Текст</strong>
                    </li>
                    <li>
                        <span>Составитель</span>
                        <strong>Смирнов И.В.</strong>
                    </li>
                </ul>
                <router-link to="Questions/6" class="btn">Просмотр</router-link>
            </div>
            <div class="item">
                <div class="top_zag">
                    <div class="zag">База вопросов 1 название в 2 строки</div>
                    <button type="button" class="delete"></button>
                    <button type="button" class="edit"></button>
                </div>
                <ul class="spisok">
                    <li>
                        <span>Уровень</span>
                        <strong>Гражданство</strong>
                    </li>
                    <li>
                        <span>Модуль</span>
                        <strong>Русский язык</strong>
                    </li>
                    <li>
                        <span>Субтест</span>
                        <strong>Письмо</strong>
                    </li>
                    <li>
                        <span>Всего</span>
                        <strong>9 вопросов</strong>
                    </li>
                    <li>
                        <span>Тип</span>
                        <strong>Текст</strong>
                    </li>
                    <li>
                        <span>Составитель</span>
                        <strong>Смирнов И.В.</strong>
                    </li>
                </ul>
                <router-link to="Questions/7" class="btn">Просмотр</router-link>
            </div>
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
<div class="popup" id="popup1">
    <div class="object">
        <button type="button" class="clouse"><img src="@/assets/img/clouse.svg" alt=""></button>
        <div class="sostav">
            <div class="title">Общая информация</div>
            <form>
                <div class="box">
                    <div class="item" >
                        <label for="name">Название базы</label>
                        <input type="text" id="name" value="">
                    </div>
                    <div class="item" >
                        <label for="subtest">Тип вопроса</label>
                        <select id="subtest">
                            <option value="" disabled selected>Выбрать тип</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>

                    <div class="item" >
                        <label for="subtest">Статус</label>
                        <select id="subtest">
                            <option value="" disabled selected>Выбрать статус</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                  
                   
                </div>
                <div class="box">
                    <div class="item">
                        <label for="uroven">Уровень</label>
                        <select id="uroven">
                            <option value="" disabled selected>Выбрать уровень</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>

                    <div class="item">
                        <label for="model">Модуль</label>
                        <select id="model">
                            <option value="" disabled selected>Модуль 1</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                
               
                    <div class="item">
                        <label for="uroven">Субтест</label>
                        <select id="uroven">
                            <option value="" disabled selected>Выбрать Субтест</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>

                </div>
         
                <div class="botom">
                    
                    <button type="button" class="btn save">Создать базу</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name:"AdminQuestions",
        mounted(){
            let self=this
            this.$Jquery('.show_popup').click(function() {                
                var popup_id = self.$Jquery(this).attr("rel")               
                self.$Jquery("#"+popup_id).show();               
            })

            this.$Jquery('.clouse').click(function() {                
                self.$Jquery('.popup').hide(); 
                self.$Jquery('body').removeClass('hide');
})
           
        }
    }
</script>

<style lang="scss" scoped>

</style>