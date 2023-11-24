import { createApp } from 'vue'
import { pinia } from './store'
import App from './App.vue'
import router from './router'

createApp(App).use(pinia).use(router).mount('#app')
