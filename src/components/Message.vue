<template>
   <div class="wrapper">
    <div class="head">
        <h1>СООБЩЕНИЯ</h1>
    </div>
    <div class="message">
        <div class="box">
            <div class="left">
                <div class="serch">
                    <form>
                        <input type="text" value="" placeholder="Напишите запрос для поиска">
                        <button type="button" class="lupa"><img src="@/assets/img/search.svg" alt=""></button>
                    </form>
                </div>
                <div class="scroll">
                    <div class="mail">
                        <div class="img"><img src="@/assets/img/ava.svg" alt=""></div>
                        <div class="name">
                            <div class="zag">Иванов И.В.</div>
                            <div class="text">Начало сообщения в две строки здесь может быть расположено...</div>
                        </div>
                        <div class="new"></div>
                    </div>
                    <div class="mail">
                        <div class="img"><img src="@/assets/img/ava.svg" alt=""></div>
                        <div class="name">
                            <div class="zag">Иванов И.В.</div>
                            <div class="text">Начало сообщения в две строки здесь может быть расположено...</div>
                        </div>
                    </div>
                    <div class="mail">
                        <div class="img"><img src="@/assets/img/ava.svg" alt=""></div>
                        <div class="name">
                            <div class="zag">Иванов И.В.</div>
                            <div class="text">Начало сообщения в две строки здесь может быть расположено...</div>
                        </div>
                    </div>
                    <div class="mail">
                        <div class="img"><img src="@/assets/img/ava.svg" alt=""></div>
                        <div class="name">
                            <div class="zag">Иванов И.В.</div>
                            <div class="text">Начало сообщения в две строки здесь может быть расположено...</div>
                        </div>
                        <div class="new"></div>
                    </div>
                    <div class="mail">
                        <div class="img"><img src="@/assets/img/ava.svg" alt=""></div>
                        <div class="name">
                            <div class="zag">Иванов И.В.</div>
                            <div class="text">Начало сообщения в две строки здесь может быть расположено...</div>
                        </div>
                    </div>
                    <div class="mail">
                        <div class="img"><img src="@/assets/img/ava.svg" alt=""></div>
                        <div class="name">
                            <div class="zag">Иванов И.В.</div>
                            <div class="text">Начало сообщения в две строки здесь может быть расположено...</div>
                        </div>
                    </div>
                    <div class="mail">
                        <div class="img"><img src="@/assets/img/ava.svg" alt=""></div>
                        <div class="name">
                            <div class="zag">Иванов И.В.</div>
                            <div class="text">Начало сообщения в две строки здесь может быть расположено...</div>
                        </div>
                        <div class="new"></div>
                    </div>
                    <div class="mail">
                        <div class="img"><img src="@/assets/img/ava.svg" alt=""></div>
                        <div class="name">
                            <div class="zag">Иванов И.В.</div>
                            <div class="text">Начало сообщения в две строки здесь может быть расположено...</div>
                        </div>
                    </div>
                    <div class="mail">
                        <div class="img"><img src="@/assets/img/ava.svg" alt=""></div>
                        <div class="name">
                            <div class="zag">Иванов И.В.</div>
                            <div class="text">Начало сообщения в две строки здесь может быть расположено...</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="date">14 ноября</div>
                <div class="mail">
                    <div class="img"><img src="@/assets/img/ava.svg" alt=""></div>
                    <div class="name">
                        <div class="zag">Иванов И.В. <div class="time">08:34</div></div>
                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor nunc at nulla egestas, sed faucibus ex mattis. Vivamus lobortis sodales elit ornare accumsan. Proin sodales bibendum tempor. Sed porta convallis lobortis. Sed dolor ligula, consectetur eu ornare sit amet, vehicula vitae ligula.</div>
                    </div>
                </div>
                <div class="mail">
                    <div class="img"><img src="@/assets/img/ava.svg" alt=""></div>
                    <div class="name">
                        <div class="zag">Преподаватель <div class="time">09:23</div></div>
                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor nunc at nulla egestas, sed faucibus ex mattis. Vivamus lobortis sodales elit ornare accumsan. Proin sodales bibendum tempor. Sed porta convallis lobortis. Sed dolor ligula, consectetur eu ornare sit amet, vehicula vitae ligula.</div>
                    </div>
                </div>
                <div class="otpr">
                    <form>
                        <textarea placeholder="Напишите сообщение и нажмите enter чтобы отправить"></textarea>
                        <div class="box">
                            <div class="file">
                                <input type="file" class="fil" id="fil">
                                <label for="fil">Прикрепить файл</label>
                            </div>
                            <button type="button" class="btn">Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name:"AdminMessage",
    }
</script>

<style lang="scss" scoped>

</style>