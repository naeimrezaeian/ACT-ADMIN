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
import { mapState } from 'vuex'

export default {

  name: 'App',
  components: {
    AdminHeader,
    Error,
    Loading
  },
  updated() {
    if (this.$route.meta.header == true) {
      window.onbeforeunload = async () => {
        return 'Changes you made may not be saved';
      }
    }
  },
  computed: {
    ...mapState('loader', ['showLoading'])
  },
}
</script>

<style src="@/assets/css/style.css"></style>
<style src="@/assets/css/mobile.css"></style>
