<template>
    <div class="wrapper">
    <div class="head">
        <h1>СОЗДАНИЕ ФИЛИАЛА</h1>
    </div>
    <div class="filial_add">
        <div class="title">Общая информация</div>
        <form>
            <div class="box">
                <div class="left">
                    <div class="box">
                        <div class="item">
                            <label for="name">Название филиала</label>
                            <input type="text" id="name" value="" placeholder="Введите название">
                        </div>
                        <div class="item">
                            <label for="zip">Код филиала</label>
                            <input type="text" id="zip" value="" placeholder="145-288">
                        </div>
                    </div>
                    <div class="box">
                        <div class="item">
                            <label for="name_s">Краткое название</label>
                            <input type="text" id="name_s" value="" placeholder="Введите название">
                        </div>
                        <div class="item">
                            <label for="tip">Тип филиала</label>
                            <select id="tip">
                                <option value="" disabled selected>Выбрать тип филиала</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
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
            </div>
            <div class="zag">
                <span>Ответственные</span>
                <button type="button" class="add">Добавить поле</button>
            </div>
            <div class="box mini">
                <div class="item">
                    <label for="lico">Ответственное лицо</label>
                    <select id="lico">
                        <option value="" disabled selected>Введите название</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div class="item">
                    <label for="otv">Главный ответственный</label>
                    <select id="otv">
                        <option value="" disabled selected>Введите название</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>
            <div class="box mini">
                <div class="item">
                    <label for="ofi_l">Официальное лицо</label>
                    <select id="ofi_l">
                        <option value="" disabled selected>Введите название</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div class="item">
                    <label for="prov">Проверяющий</label>
                    <select id="prov">
                        <option value="" disabled selected>Введите название</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>
            <div class="zag top_m">
                <span>Адрес центра, реквизиты</span>
                <button type="button" class="add">Прикрепить файлы к карточке</button>
            </div>
            <div class="box">
                <div class="left">
                    <div class="box">
                        <div class="item">
                            <label for="city">Город</label>
                            <input type="text" id="city" value="" placeholder="Введите название">
                        </div>
                        <div class="item">
                            <label for="inn">ИНН</label>
                            <input type="text" id="inn" value="" placeholder="Введите название">
                        </div>
                    </div>
                    <div class="box">
                        <div class="item">
                            <label for="adres">Фактический адрес</label>
                            <input type="text" id="adres" value="" placeholder="Введите название">
                        </div>
                        <div class="item">
                            <label for="kpp">КПП</label>
                            <input type="text" id="kpp" value="" placeholder="Введите название">
                        </div>
                    </div>
                    <div class="box">
                        <div class="item">
                            <label for="ur_adres">Юридический адрес</label>
                            <input type="text" id="ur_adres" value="" placeholder="Введите название">
                        </div>
                    </div>
                </div>
                <div class="right">
                    <label>Загруженные файлы</label>
                    <div class="files">
                        <button type="button" class="remove_pdf"></button>
                        <a class="file" href="#">Договор 1.pdf</a>
                    </div>
                    <div class="files">
                        <button type="button" class="remove_pdf"></button>
                        <a class="file" href="#">Реквизиты 2.pdf</a>
                    </div>
                    <div class="files">
                        <button type="button" class="remove_pdf"></button>
                        <a class="file" href="#">Допник 3.pdf</a>
                    </div>
                </div>
            </div>
            <div class="botom">
                <router-link to="/Branches"  class="btn otmena">Отменить</router-link>
                <button type="button" class="btn save">Сохранить</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
    export default {
        name:"AdminBrancheAdd"
    }
</script>

<style lang="scss" scoped>

</style>