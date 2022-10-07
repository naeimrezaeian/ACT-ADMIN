<template>
   <div class="wrapper">
    <div class="head">
        <h1>СОЗДАНИЕ СУБТЕСТА</h1>
    </div>
    <div class="subtest">
        <div class="title">Общая информация</div>
        <form>
            <div class="box">
                <div class="item">
                    <label for="zag">Заголовок</label>
                    <input type="text" id="zag" value="">
                </div>
                <div class="item">
                    <label for="time">Время прохождения</label>
                    <input type="text" placeholder="_ _ : _ _" onfocus="(this.type='time')" id="time">
                </div>
                <div class="item">
                    <label for="col">Количество баллов</label>
                    <input type="text" id="col" value="">
                </div>
                <div class="item">
                    <label for="col_p">Проходной балл</label>
                    <input type="text" id="col_p" value="">
                </div>
            </div>
            <div class="box">
                <div class="item">
                    <label for="urov">Уровень</label>
                    <select id="urov">
                        <option value="" disabled selected>Выбрать уровень</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div class="item">
                    <label for="model">Модуль</label>
                    <select id="model">
                        <option value="" disabled selected>Выбрать модуль</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div class="item">
                    <label for="tip">Тип субътеста</label>
                    <select id="tip">
                        <option value="" disabled selected>Выбрать тип</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div class="item">
                    <label for="tip_p">Тип проверки</label>
                    <select id="tip_p">
                        <option value="" disabled selected>Автоматический</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div class="item">
                    <label for="video">Видео запись</label>
                    <select id="video">
                        <option value="" disabled selected>Автоматический</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>
            <div class="item">
                <label for="text">Описание</label>
                <editor  id="tiny" :init="Tinyconfig" :api-key="y2pziixksnltsc59lsigx2xoh6exhrlx403o5usmmmd8awwh"></editor >
            </div>
            <div class="box">
                <div class="col">
                    <div class="title">Выбор варианта</div>
                    <div class="panel">
                        <div class="top_panel">
                            <div class="chek">
                                <input type="checkbox" id="all" value="" class="checkbox">
                                <label for="all">Выбрать все</label>
                            </div>
                            <button type="button" class="delete">Удалить выбранные из варианта</button>
                        </div>
                        <div class="variant">
                            <div class="chek">
                                <input type="checkbox" id="chek_1" value="" class="checkbox">
                                <label for="chek_1"></label>
                            </div>
                            <div class="folder">
                                <div class="fol">
                                    <div class="zag">Вариант 1</div>
                                    <button type="button" class="edit"></button>
                                </div>
                                <div class="text">
                                    <div class="txt">Вопрос 1. Продолжение текста вопроса, возможно длинное, может быть даже в две строки</div>
                                    <button type="button" class="edit"></button>
                                </div>
                                <button type="button" class="add">Добавить вариант</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="title">Выбор вопроса</div>
                    <div class="panel">
                        <div class="top_panel">
                            <div class="chek">
                                <input type="checkbox" id="all_1" value="" class="checkbox">
                                <label for="all_1">Выбрать все</label>
                            </div>
                            <button type="button" class="delete left">Удалить выбранные</button>
                        </div>
                        <div class="variant">
                            <div class="chek">
                                <input type="checkbox" id="chek_2" value="" class="checkbox">
                                <label for="chek_2"></label>
                            </div>
                            <div class="folder">
                                <div class="fol">
                                    <div class="zag">База вопросов 1</div>
                                    <div class="sub_folder">
                                        <div class="item">
                                            <div class="chek">
                                                <input type="checkbox" id="chek_3" value="" class="checkbox" checked>
                                                <label for="chek_3"></label>
                                            </div>
                                            <div class="name">Вопрос 1. Продолжение текста вопроса, возможно длинное, может быть даже в две строки</div>
                                            <button type="button" class="edit"></button>
                                        </div>
                                        <div class="item">
                                            <div class="chek">
                                                <input type="checkbox" id="chek_4" value="" class="checkbox">
                                                <label for="chek_4"></label>
                                            </div>
                                            <div class="name">Вопрос 2. Продолжение текста вопроса, возможно длинное, может быть даже в две строки</div>
                                            <button type="button" class="edit"></button>
                                        </div>
                                        <div class="item">
                                            <div class="chek">
                                                <input type="checkbox" id="chek_5" value="" class="checkbox">
                                                <label for="chek_5"></label>
                                            </div>
                                            <div class="name">Вопрос 3. Продолжение текста вопроса, возможно длинное, может быть даже в две строки</div>
                                            <button type="button" class="edit"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="variant">
                            <div class="chek">
                                <input type="checkbox" id="chek_6" value="" class="checkbox">
                                <label for="chek_6"></label>
                            </div>
                            <div class="folder">
                                <div class="fol">
                                    <div class="zag">База вопросов 2</div>
                                    <div class="sub_folder">
                                        <div class="item">
                                            <div class="chek">
                                                <input type="checkbox" id="chek_7" value="" class="checkbox">
                                                <label for="chek_7"></label>
                                            </div>
                                            <div class="name">Вопрос 1. Продолжение текста вопроса, возможно длинное, может быть даже в две строки</div>
                                            <button type="button" class="edit"></button>
                                        </div>
                                        <div class="item">
                                            <div class="chek">
                                                <input type="checkbox" id="chek_8" value="" class="checkbox">
                                                <label for="chek_8"></label>
                                            </div>
                                            <div class="name">Вопрос 2. Продолжение текста вопроса, возможно длинное, может быть даже в две строки</div>
                                            <button type="button" class="edit"></button>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" class="add show_popup" rel="popup1">Добавить вопросы</button>
                            </div>
                        </div>
                        <button type="button" class="btn">Добавить выбранное к варианту</button>
                    </div>
                </div>
            </div>
            <div class="botom">
                <router-link to="/Subjects" class="btn otmena">Отменить</router-link>
                
                <button type="button" class="btn save">Сохранить</button>
            </div>
        </form>
    </div>
</div>
<div class="popup" id="popup1">
    <div class="object">
        <button type="button" class="clouse"><img src="img/clouse.svg" alt=""></button>
        <div class="title">Выбор вопроса из базы</div>
        <form>
           
            
            <div class="panel">
                <div class="top_panel">
                    <div class="chek">
                        <input type="checkbox" id="all_9" value="" class="checkbox">
                        <label for="all_9">Выбрать все</label>
                    </div>
                </div>
                <div class="table moduls">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <input type="checkbox" id="all_10" value="" class="checkbox" checked>
                                <label for="all_10"></label>
                            </td>
                            <td>
                                <a href="#">База вопросов 1</a>
                            </td>
                            <td>Патент</td>
                            <td>Русский язык</td>
                            <td>Не присвоен</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" id="all_11" value="" class="checkbox" checked>
                                <label for="all_11"></label>
                            </td>
                            <td>
                                <a href="#">База вопросов 2</a>
                            </td>
                            <td>Патент</td>
                            <td>Русский язык</td>
                            <td>Не присвоен</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" id="all_12" value="" class="checkbox">
                                <label for="all_12"></label>
                            </td>
                            <td>
                                <a href="#">База вопросов 3</a>
                            </td>
                            <td>Патент</td>
                            <td>Русский язык</td>
                            <td>Не присвоен</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" id="all_13" value="" class="checkbox">
                                <label for="all_13"></label>
                            </td>
                            <td>
                                <a href="#">База вопросов 4</a>
                            </td>
                            <td>Патент</td>
                            <td>Русский язык</td>
                            <td>Не присвоен</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" id="all_14" value="" class="checkbox">
                                <label for="all_14"></label>
                            </td>
                            <td>
                                <a href="#">База вопросов 5</a>
                            </td>
                            <td>Патент</td>
                            <td>Русский язык</td>
                            <td>Не присвоен</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" id="all_15" value="" class="checkbox">
                                <label for="all_15"></label>
                            </td>
                            <td>
                                <a href="#">База вопросов 6</a>
                            </td>
                            <td>Патент</td>
                            <td>Русский язык</td>
                            <td>Не присвоен</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" id="all_16" value="" class="checkbox">
                                <label for="all_16"></label>
                            </td>
                            <td>
                                <a href="#">База вопросов 7</a>
                            </td>
                            <td>Патент</td>
                            <td>Русский язык</td>
                            <td>Не присвоен</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" id="all_17" value="" class="checkbox">
                                <label for="all_17"></label>
                            </td>
                            <td>
                                <a href="#">База вопросов 8</a>
                            </td>
                            <td>Патент</td>
                            <td>Русский язык</td>
                            <td>Не присвоен</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" id="all_18" value="" class="checkbox">
                                <label for="all_18"></label>
                            </td>
                            <td>
                                <a href="#">База вопросов 9</a>
                            </td>
                            <td>Патент</td>
                            <td>Русский язык</td>
                            <td>Не присвоен</td>
                            <td>9</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="botom">
                
                <button type="button" class="btn save">Добавить</button>
            </div>
        </form>
    </div>
</div>
</template>




<script>
    import Editor from '@tinymce/tinymce-vue'
    const Tinyconfig = {
        selector: '#tiny',
        height: 214,
        plugins: [
            'advlist autolink link image lists charmap print preview hr anchor pagebreak',
            'searchreplace wordcount visualblocks code fullscreen insertdatetime media nonbreaking',
            'table emoticons template paste help'
        ],
        toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
            'forecolor backcolor emoticons | help',
        menubar: false

    }
    
    export default {
        name:"AdminSubjectAdd",
        data(){
        return {
            Tinyconfig
        }
    },
        components: {
    'editor': Editor
  }

    }
</script>

<style lang="scss" scoped>

</style>