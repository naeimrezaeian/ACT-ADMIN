<template>
    <div class="wrapper">
    <div class="head">
        <h1>СОЗДАНИЕ ПРОФИЛЯ ТЕСТИРУЕМОГО</h1>
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
                        <div class="select ">
                            <label for="date">Дата рождения</label>
                            <input type="text" placeholder="__.__.____" onfocus="(this.type='date')" id="date" name="date" class="dats">
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="item">
                        <label for="naci">Национальность</label>
                        <input type="text" id="naci" name="naci" value="">
                    </div>
                    <div class="item">
                        <label for="roj">Место рождения</label>
                        <select name="roj" id="roj">
                            <option value="" disabled selected>Выбрать город</option>
                            <option value="Москва">Москва</option>
                            <option value="Санк-Петербург">Санк-Петербург</option>
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
                    <button type="button" class="qr">Сканировать</button>
                    <button type="button" class="add">Сделать фото</button>
                    <button type="button" class="down">Загрузить</button>
                    <button type="button" class="remove">Удалить</button>
                </div>
            </div>
            <div class="docs">
                <div class="title">Документы</div>
                <div class="box">
                    <div class="item">
                        <label for="doc">Документ</label>
                        <select name="doc" id="doc">
                            <option value="Паспорт">Паспорт</option>
                            <option value="Свидетельство о рождении">Свидетельство о рождении</option>
                            <option value="Права">Права</option>
                        </select>
                        <div class="files">
                            <button type="button" class="remove_pdf"></button>
                            <a class="file" href="#">Скан паспорта.pdf</a>
                        </div>
                    </div>
                    <div class="item">
                        <label for="date_v">Дата выдачи</label>
                        <input type="text" placeholder="__.__.____" onfocus="(this.type='date')" id="date_v" name="date_v">
                        <div class="files">
                            <button type="button" class="remove_pdf"></button>
                            <a class="file" href="#">Скан квитанции.pdf</a>
                        </div>
                    </div>
                    <div class="item">
                        <label for="kem">Кем выдан</label>
                        <input type="text" id="kem" name="kem" value="">
                        <button type="button" class="add_doc">Загрузить документы</button>
                        <button type="button" class="add_doc">Загрузить квитанцию об оплате</button>
                    </div>
                    <div class="item">
                        <label for="cart">Миграционная карта</label>
                        <input type="text" id="cart" name="cart" value="">
                        <div class="sp">
                            <label for="sprav">Справка для пересдачи</label>
                            <input type="text" id="sprav" name="sprav" value="" placeholder="Номер справки">
                        </div>
                    </div>
                </div>
            </div>
            <div class="botom">
                <button type="button" class="btn otmena">Отменить</button>
                <button type="button" class="btn save">Сохранить</button>
            </div>
        </form>
    </div>
    <div class="exams">
        <div class="title">Экзамены</div>
        <div class="citi">
            <div class="info">
                <div class="name">Гражданство</div>
                <div class="proverka">
                    <span>Проверка завершена</span>
                    <span class="nomer">№ 1-3325</span>
                </div>
            </div>
            <div class="box">
                <div class="left">
                    <div class="item">
                        <div class="name">Ответственный:</div>
                        <div class="txt">Длиннаяфамилия И.О.</div>
                    </div>
                    <div class="item">
                        <div class="name">Дата проведения:</div>
                        <div class="txt">22.04.2021</div>
                    </div>
                    <div class="item">
                        <div class="name">Кол-во тестируемых:</div>
                        <div class="txt">7</div>
                    </div>
                    <div class="item">
                        <div class="name">Группа</div>
                        <div class="txt"><a href="#">Г-123</a></div>
                    </div>
                </div>
                <div class="right">
                    <div class="name">Комменатрий</div>
                    <div class="txt">Текстовый комментарий к карточке</div>
                </div>

                <div class="bottom">
                    <a href="#" class="btn def">Протокол</a>
                    <a href="#" class="btn def">Список</a>
                </div>
            </div>
            <div class="box rezult" id="first">
                <div class="box">
                    <div class="left">
                        <div class="title">Матрица результатов</div>
                        <a href="#" class="btn edit">Редактировать</a>
                    </div>
                    <div class="right">
                        <table>
                            <tbody>
                            <tr>
                                <th></th>
                                <th>Лексика <br>и грамматика</th>
                                <th>Чтение</th>
                                <th>Аудирование</th>
                                <th>Письмо</th>
                                <th>Говорение</th>
                            </tr>
                            <tr>
                                <td>Баллы</td>
                                <td>20</td>
                                <td>30</td>
                                <td>40</td>
                                <td>35</td>
                                <td>60</td>
                            </tr>
                            <tr>
                                <td>Процент</td>
                                <td><b>33%</b></td>
                                <td><b>100%</b></td>
                                <td><b>100%</b></td>
                                <td><b>50%</b></td>
                                <td><b>75%</b></td>
                            </tr>
                            <tr>
                                <td>Максимум</td>
                                <td>60</td>
                                <td>40</td>
                                <td>50</td>
                                <td>70</td>
                                <td>80</td>
                            </tr>
                            <tr>
                                <td>Порог</td>
                                <td>50</td>
                                <td>30</td>
                                <td>40</td>
                                <td>55</td>
                                <td>45</td>
                            </tr>
                            <tr>
                                <td><a href="#">Посмотреть ответы</a></td>
                                <td><a href="#"><img src="@/assets/img/icon5.svg" alt=""></a></td>
                                <td><a href="#"><img src="@/assets/img/icon5.svg" alt=""></a></td>
                                <td><a href="#"><img src="@/assets/img/icon6.svg" alt=""></a></td>
                                <td><a href="#"><img src="@/assets/img/icon5.svg" alt=""></a></td>
                                <td><a href="#"><img src="@/assets/img/icon5.svg" alt=""></a></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <button class="calaps" onclick="$('#first').slideToggle()">Свернуть</button>
        </div>
        <div class="patent">
            <div class="citi">
                <div class="info">
                    <div class="name">Патент</div>
                    <div class="proverka arhiv">
                        <span>В архиве</span>
                        <span class="nomer">№ 1-3325</span>
                    </div>
                </div>
                <div class="box">
                    <div class="left">
                        <div class="item">
                            <div class="name">Ответственный:</div>
                            <div class="txt">Длиннаяфамилия И.О.</div>
                        </div>
                        <div class="item">
                            <div class="name">Дата проведения:</div>
                            <div class="txt">22.04.2021</div>
                        </div>
                        <div class="item">
                            <div class="name">Кол-во тестируемых:</div>
                            <div class="txt">7</div>
                        </div>
                        <div class="item">
                            <div class="name">Группа</div>
                            <div class="txt"><a href="#">Г-123</a></div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="name">Комменатрий</div>
                        <div class="txt">Текстовый комментарий к карточке</div>
                    </div>
                </div>
                <div class="box rezult hide" id="second">
                    <div class="box">
                        <div class="left">
                            <div class="title">Матрица результатов</div>
                            <a href="#" class="btn edit">Редактировать</a>
                        </div>
                        <div class="right">
                            <table>
                                <tbody>
                                <tr>
                                    <th></th>
                                    <th>Лексика <br>и грамматика</th>
                                    <th>Чтение</th>
                                    <th>Аудирование</th>
                                    <th>Письмо</th>
                                    <th>Говорение</th>
                                </tr>
                                <tr>
                                    <td>Баллы</td>
                                    <td>20</td>
                                    <td>30</td>
                                    <td>40</td>
                                    <td>35</td>
                                    <td>60</td>
                                </tr>
                                <tr>
                                    <td>Процент</td>
                                    <td><b>33%</b></td>
                                    <td><b>100%</b></td>
                                    <td><b>100%</b></td>
                                    <td><b>50%</b></td>
                                    <td><b>75%</b></td>
                                </tr>
                                <tr>
                                    <td>Максимум</td>
                                    <td>60</td>
                                    <td>40</td>
                                    <td>50</td>
                                    <td>70</td>
                                    <td>80</td>
                                </tr>
                                <tr>
                                    <td>Порог</td>
                                    <td>50</td>
                                    <td>30</td>
                                    <td>40</td>
                                    <td>55</td>
                                    <td>45</td>
                                </tr>
                                <tr>
                                    <td><a href="#">Посмотреть ответы</a></td>
                                    <td><a href="#"><img src="@/assets/img/icon5.svg" alt=""></a></td>
                                    <td><a href="#"><img src="@/assets/img/icon5.svg" alt=""></a></td>
                                    <td><a href="#"><img src="@/assets/img/icon6.svg" alt=""></a></td>
                                    <td><a href="#"><img src="@/assets/img/icon5.svg" alt=""></a></td>
                                    <td><a href="#"><img src="@/assets/img/icon5.svg" alt=""></a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <button class="calaps active" onclick="$('#second').slideToggle()">Развернуть</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name:"AdminCandidatesAdd"
    }
</script>

<style lang="scss" scoped>

</style>