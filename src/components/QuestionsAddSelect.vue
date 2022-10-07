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
                <li class="breadcrumb-item active" aria-current="page">Тип вопроса «Список»</li>
            </ol>
        </nav>
        <form>
            <div class="item">
                <label for="vopr">Напишите название вопроса</label>
                <input type="text" value="" id="vopr">
            </div>
            <div class="item">
                <label for="tiny">Введите текст вопроса</label>
                <editor  id="tiny" :init="Tinyconfig" :api-key="y2pziixksnltsc59lsigx2xoh6exhrlx403o5usmmmd8awwh"></editor >
           
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
            <div class="botom">
                <router-link to="/Questions" class="btn otmena">Отменить</router-link>
                <button type="button" class="btn save">Создать</button>
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
        name:"AdminQuestionSelect",      
        data(){
        return {
            Tinyconfig
        }},
        components: {
    'editor': Editor
  }
        
    }
</script>

<style lang="scss" scoped>

</style>