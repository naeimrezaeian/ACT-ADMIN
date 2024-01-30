<template>
  <Error />
  <Loading :loading="showLoading" />
  <AdminHeader v-if="$route.meta.header == true" />
  <router-view />
</template>

<script>
import AdminHeader from './components/Header.vue'
import Error from './components/ErrorMessage.vue'
import Loading from './components/LoadingAnimate.vue'
import { mapState, mapActions } from 'vuex'
import router from '@/router'

export default {

  name: 'App',
  components: {
    AdminHeader,
    Error,
    Loading
  },
  mounted() {
    const token = localStorage.getItem('token');
    token ? this.setUserRole(token) : router.push('/');
  },
  updated() {
    if (this.$route.meta.header == true) {
      window.onbeforeunload = async () => {
        return 'Changes you made may not be saved';
      }
    }
  },
  methods: {
    ...mapActions({
      setUserRole: 'setUserRole',
    })
  },
  computed: {
    ...mapState('loader', ['showLoading'])
  },
}
</script>

<style src="@/assets/css/style.css"></style>
<style src="@/assets/css/mobile.css"></style>
