<template>
  <Error />
  <Loading :loading="showLoading"/>
  <AdminHeader v-if="$route.meta.header == true" />
  <router-view />
</template>

<script>
import AdminHeader from './components/Header.vue'
import Error from './components/ErrorMessage.vue'
import Loading from './components/LoadingAnimate.vue'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {

  name: 'App',
  components: {
    AdminHeader,
    Error,
    Loading
  },

  computed: {
    ...mapState('loader', ['showLoading'])
  },

  methods: {
    ...mapActions('loader', ['hide', 'show'])
  },
}
</script>

<style src="@/assets/css/style.css"></style>
<style src="@/assets/css/mobile.css"></style>
