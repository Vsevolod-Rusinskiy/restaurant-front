<template>
    <nav class="navbar">
        <div class="navbar__container">
            <router-link to="/" class="navbar__item">Главная</router-link>
            <router-link to="/admin" v-if="authStore.isAuthenticated" class="navbar__item"
                >Администрирование</router-link
            >
            <button @click="authStore.isAuthenticated ? logout() : login()">
                {{ authStore.isAuthenticated ? 'Выйти' : 'Войти' }}
            </button>
        </div>
    </nav>
</template>

<script setup>
import { useAuthStore } from '@/store/modules/authStore'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const login = () => {
    router.push('/login')
}

const logout = () => {
    authStore.clearAuthData()
    router.push('/')
}
</script>

<style lang="scss" scoped>
.navbar {
    background-color: #333;
    padding: 0.5rem 1rem;
    &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__item {
        margin-left: 1rem;
        color: white;
        text-decoration: none;

        &.router-link-active {
            color: #4caf50;
            text-decoration: underline;
        }
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
