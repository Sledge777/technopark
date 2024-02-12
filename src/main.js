import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.config.globalProperties.$axios = axios


app
    .use(router)
    .use(VueAxios,axios)
    .mount('#app')