// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './assets/css/style.css'
// import './assets/css/plugins.css'
// import './assets/js/plugins'
// import './assets/js/scripts'


const app = createApp(App)

app.use(router)

app.mount('#app')
