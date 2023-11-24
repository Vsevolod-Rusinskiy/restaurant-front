import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Admin from '@/views/Admin.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        // meta: { requiresAuth: true } // Это для будущей логики аутентификации
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
