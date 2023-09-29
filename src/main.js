import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store'

import jquery from 'jquery'
import Swal from 'sweetalert2'
import { convertToBool, convertToTime, convertToMinutes } from './helper/helper';
//global.Jquery=jquery
global.$ = jquery
global.Swal = Swal

const app = createApp(App)
app.config.globalProperties.$Jquery = jquery
app.config.globalProperties.Swal = Swal
app.config.globalProperties.$convertToBool = convertToBool
app.config.globalProperties.$convertToTime = convertToTime
app.config.globalProperties.$convertToMinutes = convertToMinutes
app.use(store)
app.use(router)
app.mount('#app')
