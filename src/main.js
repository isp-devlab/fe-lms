// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from "./store"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './assets/css/style.css'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
