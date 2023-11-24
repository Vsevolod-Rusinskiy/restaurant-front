<template>
    <div class="login-form-wrapper">
        <h1 class="form-title">{{ formTitle }}</h1>
        <div class="login-form">
            <form @submit.prevent="handleSubmit" class="login-form__container">
                <input
                    type="text"
                    placeholder="Username"
                    v-model="username"
                    autocomplete="username"
                    required
                    minlength="3"
                    maxlength="20"
                    class="login-form__input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    v-model="password"
                    autocomplete="current-password"
                    required
                    minlength="3"
                    maxlength="25"
                    class="login-form__input"
                />
                <button type="submit" class="login-form__button">{{ buttonText }}</button>
                <slot name="link"></slot>
                <slot name="message"></slot>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
    formTitle: String,
    buttonText: String,
})

const emit = defineEmits(['submit'])

const username = ref('')
const password = ref('')

const handleSubmit = () => {
    emit('submit', { username: username.value, password: password.value })
}
</script>

<style lang="scss" scoped>
.login-form-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .form-title {
        color: #007bff;
        text-align: center;
        margin-bottom: 20px;
        font-size: 3rem;
    }
    .login-form {
        width: 100%;
        max-width: 320px;
        padding: 40px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        background-color: white;
        border: 1px solid #ccc;

        &__container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        &__input,
        &__button {
            margin-bottom: 20px;
            padding: 15px;
            width: 100%;
            border-radius: 5px;
        }

        &__button {
            cursor: pointer;
            font-size: 16px;
            background-color: #007bff;
            color: white;
            border: none;
        }
    }
}
</style>
