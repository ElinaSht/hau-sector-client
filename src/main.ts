import 'moment/dist/locale/ru'
import moment from 'moment'
import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import { newsRoute } from '@/news/router'
import { issuesRoute } from '@/issues/router'
import { chatRoute } from '@/chat/router'
import { paymentsRoute } from '@/payments/router'
import { registerRoute } from '@/register/router'
import { votesRoute } from '@/votes/router'
import App from '@/App.vue'
import { homeRoute } from '@/home/router'
import { primeVueConfig } from '@/core/constants/prime-vue-config'
import './index.css'

moment.locale('ru')

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    homeRoute,
    registerRoute,
    paymentsRoute,
    votesRoute,
    chatRoute,
    issuesRoute,
    newsRoute,
  ],
})
app.use(router)

app
  .use(PrimeVue, primeVueConfig)
  .use(ToastService)

app.mount('#app')
