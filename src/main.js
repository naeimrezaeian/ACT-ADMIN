import { createApp } from 'vue'

import App from './App.vue'
import router from './router';


import jquery from 'jquery'
import Swal from 'sweetalert2'
//global.Jquery=jquery
global.$=jquery
global.Swal= Swal

const app = createApp(App)
app.config.globalProperties.$Jquery=jquery
app.config.globalProperties.Swal=Swal
app.use(router)

app.mount('#app')
