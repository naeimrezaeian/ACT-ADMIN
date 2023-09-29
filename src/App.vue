<template>
  <Error />
  <AdminHeader v-if="$route.meta.header == true" />
  <router-view />
</template>

<script>
import AdminHeader from './components/Header.vue'
import Error from './components/ErrorMessage.vue'
export default {

  name: 'App',
  components: {
    AdminHeader,
    Error

  }
}
</script>

<style src="@/assets/css/style.css"></style>
<style src="@/assets/css/mobile.css"></style>
