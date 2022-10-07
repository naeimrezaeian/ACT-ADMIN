<template>
    <div class="wrapper">
    <div class="head">
        <h1>СОЗДАНИЕ ВОПРОСА</h1>
    </div>
    <div class="vopros_edit">
        <nav class="bread">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Патент</a></li>
                <li class="breadcrumb-item"><a href="#">Модуль 1</a></li>
                <li class="breadcrumb-item"><a href="#">Чтение</a></li>
                <li class="breadcrumb-item active" aria-current="page">Тип вопроса «Аудирование»</li>
            </ol>
        </nav>
        <form>
            <div class="item">
                <label for="vopr">Напишите название вопроса</label>
                <input type="text" value="" id="vopr">
            </div>
            <div class="box">
                <label for="subtest">Укажите количество прослушиваний</label>
                <select id="subtest">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div class="audi">
                <div class="box">
                    <button type="button" class="add">Загрузить аудио</button>
                    <span>Загрузите файл в формате mp3, wav, ogg</span>
                </div>
                <div class="box">
                    <audio controls="controls">
                        <source src="https://webref.ru/example/audio/music.mp3" type="audio/mpeg" />
                    </audio>
                    <button type="button" class="edit">Редактировать</button>
                    <button type="button" class="delete">Удалить</button>
                </div>
            </div>
            <div class="item">
                <label for="tiny">Введите текст вопроса</label>
                <textarea id="tiny">Что вы поняли из прослушанного?</textarea>
            </div>
            <div class="box">
                <label for="od_1" class="blue">###_1</label>
                <input type="text" value="" id="od_1">
            </div>
            <div class="box">
                <label for="od_2" class="blue">###_2</label>
                <input type="text" value="" id="od_2">
            </div>
            <div class="box">
                <label for="od_3" class="blue">###_3</label>
                <input type="text" value="" id="od_3">
                <button type="button" class="add">Добавить вариант ответа</button>
            </div>
            <button type="button" class="add">Добавить вопрос</button>
            <div class="botom">
                <button type="button" class="btn otmena">Отменить</button>
                <button type="button" class="btn save">Создать</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
    export default {
    name:"AdminQuestionAudio"    
    
    }
</script>

<style lang="scss" scoped>

</style>