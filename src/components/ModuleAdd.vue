<template>
    <div class="wrapper">
    <div class="head">
        <h1>СОЗДАНИЕ МОДУЛЬ</h1>
    </div>
    <div class="level">
        <div class="title">Общая информация</div>
        <form>
            <div class="box">
                <div class="item">
                    <label for="name">Название модуль</label>
                    <input type="text" id="name" value="">
                </div>
                <div class="itemsmall">
                    <label for="status">Уровень</label>
                    <select id="status">
                        <option value="" disabled selected>Выбрать уровень</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div class="itemsmall">
                    <label for="urov">Статус</label>
                    <select id="urov">
                        <option value="" disabled selected>Выбрать статус</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                
            </div>
            
            <div class="item">
                <label for="mess">Описание</label>
                <editor  id="tiny" :init="Tinyconfig" :api-key="y2pziixksnltsc59lsigx2xoh6exhrlx403o5usmmmd8awwh"></editor >
            </div>
            <div class="botom">
                <router-link to="/Module" class="btn otmena">Отменить</router-link>
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
        name:"AdminModuleAdd",
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