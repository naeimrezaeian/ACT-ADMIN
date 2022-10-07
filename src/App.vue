<template>
<AdminHeader v-if="$route.meta.header == true"/>
<router-view />
      
</template>

<script>
import AdminHeader from './components/Header.vue'

export default {
  
  name: 'App',
  components: {
    AdminHeader,
    
   
  }
}
</script>

<style src="@/assets/css/style.css"></style>
<style src="@/assets/css/mobile.css"></style>
