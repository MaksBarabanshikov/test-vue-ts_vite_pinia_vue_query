import { createApp } from 'vue'
import { createWebHistory } from "vue-router"
import { createPinia } from "pinia";

import createRouter from "@/lib/router"
import App from '@/App.vue'

import '@/style.css'
const store = createPinia()
const router = createRouter(createWebHistory())
const app = createApp(App)
app
    .use(router)
    .use(store)
    .mount('#app')
