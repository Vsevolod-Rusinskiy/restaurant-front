<template>
    <AuthForm formTitle="Регистрация" buttonText="Зарегистрироваться" @submit="register">
        <template #link>
            <p>
                Уже есть аккаунт?
                <router-link to="/login">Войти</router-link>
            </p>
        </template>
        <template #message>
            <p
                v-if="registrationMessage"
                :class="{ 'error-message': isErrorMessage, 'success-message': !isErrorMessage }"
            >
                {{ registrationMessage }}
            </p>
        </template>
    </AuthForm>
</template>

<script setup lang="ts">
import AuthForm from '@/components/Forms/AuthForm.vue'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { User } from '@/interfaces/User'

const router = useRouter()
const isErrorMessage = ref(false)
const registrationMessage = ref('')

const register = async ({ username, password }: User) => {
    try {
        const userData: User = { username, password }
        await axios.post(`${process.env.VUE_APP_API_URL}/api/register`, userData)
        registrationMessage.value = 'Пользователь успешно создан'
        isErrorMessage.value = false
        setTimeout(() => {
            router.push('/login')
        }, 1500)
    } catch (error) {
        registrationMessage.value = 'Пользователь с таким именем уже зарегистрирован'
        isErrorMessage.value = true
    }
}
</script>

<style lang="scss" scoped>
.error-message {
    color: red;
}

.success-message {
    color: green;
}
</style>
