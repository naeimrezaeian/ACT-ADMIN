<template>
    <div class="wrapper">
    <nav class="bread">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Патент</a></li>
            <li class="breadcrumb-item"><a href="#">Модуль 1</a></li>
            <li class="breadcrumb-item"><a href="#">Чтение</a></li>
            <li class="breadcrumb-item active" aria-current="page">Тип вопроса «Список»</li>
        </ol>
    </nav>
    <div class="vopros">
        <div class="panel">
            <div class="left">
                <div class="chek">
                    <input type="checkbox" id="all" value="" class="checkbox">
                    <label for="all">Выбрать все</label>
                </div>
                <button type="button" class="delete">Удалить выбранные</button>
            </div>
            <router-link to="Add/Audio" class="add">Добавить вопрос</router-link>
        </div>
        <div class="table">
            <table>
                <tbody>
                <tr>
                    <th></th>
                    <th>Текст вопроса</th>
                    <th>Тип вопроса</th>
                    <th>Статус</th>
                    <th>Вариант</th>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" id="all_1" value="" class="checkbox">
                        <label for="all_1"></label>
                    </td>
                    <td>
                        <router-link to="Add/Audio">Вопрос 1. Продолжение текста вопроса, возможно длинное, может быть даже в две строки</router-link>
                    </td>
                    <td>аудио</td>
                    <td>активно</td>
                    <td>
                        <button type="button" class="edit"></button>
                        <button type="button" class="remove"></button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" id="all_2" value="" class="checkbox">
                        <label for="all_2"></label>
                    </td>
                    <td>
                        <router-link to="Add/Video" >Вопрос 2. Короткий вопрос в одну строку как образец</router-link>
                    </td>
                    <td>Видео</td>
                    <td>в архиве</td>
                    <td>
                        <button type="button" class="edit"></button>
                        <button type="button" class="remove"></button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" id="all_3" value="" class="checkbox">
                        <label for="all_3"></label>
                    </td>
                    <td>
                        <router-link to="Add/Letter">Вопрос 3. Продолжение текста вопроса, возможно длинное, может быть даже в две строки</router-link>
                    </td>
                    <td>Письмо</td>
                    <td>активно</td>
                    <td>
                        <button type="button" class="edit"></button>
                        <button type="button" class="remove"></button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" id="all_4" value="" class="checkbox">
                        <label for="all_4"></label>
                    </td>
                    <td>
                        <router-link to="Add/Select">Вопрос 4. Продолжение текста вопроса, возможно длинное, может быть даже в две строки</router-link>
                    </td>
                    <td>Выбор варианта ответа</td>
                    <td>активно</td>
                    <td>
                        <button type="button" class="edit"></button>
                        <button type="button" class="remove"></button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" id="all_5" value="" class="checkbox">
                        <label for="all_5"></label>
                    </td>
                    <td>
                        <router-link to="Add/Select">Вопрос 5. Короткий вопрос в одну строку как образец</router-link>
                    </td>
                    <td>Выбор варианта ответа</td>
                    <td>неактивно</td>
                    <td>
                        <button type="button" class="edit"></button>
                        <button type="button" class="remove"></button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" id="all_6" value="" class="checkbox">
                        <label for="all_6"></label>
                    </td>
                    <td>
                        <router-link to="Add/Audio">Вопрос 6. Короткий вопрос в одну строку как образец</router-link>
                    </td>
                    <td>Выбор варианта ответа</td>
                    <td>неактивно</td>
                    <td>
                        <button type="button" class="edit"></button>
                        <button type="button" class="remove"></button>
                    </td>
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
        name:"AdminQuestionsList"
    }
</script>

<style lang="scss" scoped>

</style>