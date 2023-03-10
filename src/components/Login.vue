<template>
  <div class="reg">
    <header>
      <div class="wrapper">
        <div class="logo">
          <a href="#"><img src="@/assets/img/logo1.svg" alt="" /></a>
        </div>
      </div>
    </header>
    <section>
      <div class="wrapper">
        <div class="registret">
          <div class="title">АВТОРИЗАЦИЯ</div>
          <form  :class="{ error: error }" @submit.prevent="checkForm">
            <input
              type="text"              
              placeholder="Введите логин"
              name="login"
              v-model="username"
              
            />
            <div class="password">
              <input
                :type="passwordFieldType"
                id="password-input"
                placeholder="Введите пароль"
                name="password"
                v-model="password"
                
              />
              <a
                href="#"
                class="password-control"
                :class="{ view: passwordShow }"
                @click="show_hide_password"
              ></a>
            </div>
            <div class="error" v-if="error">{{error }}</div>
            <div class="box">
              <button type="submit" class="btn">Войти</button>
              <button type="button" class="def">Забыли пароль?</button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <footer>
      <div class="wrapper">
        <div class="box">
          <div class="left">
            <ul>
              <li><a href="#">Ознакомиться с публичной офертой</a></li>
              <li><a href="#">Пользовательское соглашение</a></li>
              <li><a href="#">Политика конфиденциальности</a></li>
            </ul>
          </div>
          <div class="right">
            <ul>
              <li><a href="#">О платформе</a></li>
              <li><a href="#">Техническая поддержка</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  name: "AdminLogin",
  data() {
    return {
      errors: [],
      formError: false,
      username:null,
      password:null,     
      passwordFieldType: "password",
      passwordShow: false,
    };
  },
  components: {},
  computed:{
    ...mapGetters({error:'getError',loading:'getLoading'})
  },
  methods: {
    ...mapActions({login:'adminLogin'}),
    async checkForm() {
      const { username, password } = this;
      console.log({username,password})
      await this.login({username,password})
    },
    show_hide_password() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
      this.passwordShow = !this.passwordShow;
    },
  },
};
</script>

<style>
</style>