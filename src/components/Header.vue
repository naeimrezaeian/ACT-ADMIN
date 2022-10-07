<template>
  <header>
    <div class="wrapper">
        <div class="box">
            <div class="logo">
                <router-link to="/Dashboard"><img src="@/assets/img/logo.svg" alt="ACT"></router-link>
            </div>
            <button class="mobile" onclick="$('#main_menu').slideToggle()">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav class="menu" id="main_menu">
                <ul>
                    <li>
                        <router-link to="/Users">
                            <img src="@/assets/img/icon.svg" alt="">
                            <span>ПОЛЬЗОВАТЕЛИ</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Branches">
                            <img src="@/assets/img/icon1.svg" alt="">
                            <span>ФИЛИАЛЫ</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="#">
                            <img src="@/assets/img/icon2.svg" alt="">
                            <span>ЗАЯВКИ</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="#">
                            <img src="@/assets/img/icon3.svg" alt="">
                            <span>ОТЧЕТЫ</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Message">
                            <img src="@/assets/img/icon4.svg" alt="">
                            <span>СООБЩЕНИЯ</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
</template>

<script>
export default {
name: 'AdminHeader',
methods(){
    
}

}
</script>

