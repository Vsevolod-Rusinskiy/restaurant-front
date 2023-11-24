<template>
    <AuthForm formTitle="Вход" buttonText="Войти" @submit="login">
        <template #link>
            <p>
                Еще нет аккаунта?
                <router-link to="/register">Зарегистрируйтесь</router-link>
            </p>
        </template>
        <template #message>
            <p v-if="isErrorMessage" class="error-message">{{ isErrorMessage }}</p>
        </template>
    </AuthForm>
</template>
<script setup lang="ts">
import AuthForm from '@/components/Forms/AuthForm.vue'
import { ref } from 'vue'
import { useAuthStore } from '@/store/modules/authStore'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { User } from '@/interfaces/User'

const authStore = useAuthStore()
const router = useRouter()
const isErrorMessage = ref(false)

const login = async ({ username, password }: User) => {
    try {
        const userData: User = {
            username,
            password,
        }
        const response = await axios.post(`${process.env.VUE_APP_API_URL}/api/login`, userData)
        authStore.setAuthData(response.data.token, username)
        router.push('/admin')
    } catch (error) {
        const e = error as any
        isErrorMessage.value = e.response.data.message
        console.error('Ошибка при входе:', e.response?.data)
    }
}
</script>

<style lang="scss" scoped>
.error-message {
    color: red;
}
</style>
