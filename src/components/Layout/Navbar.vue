<template>
    <nav class="navbar">
        <router-link to="/" class="navbar-item">Главная</router-link>
        <router-link to="/admin" class="navbar-item">Администрирование</router-link>
        <!-- Дополнительные ссылки по мере необходимости -->
    </nav>
</template>

<!-- Здесь стили и скрипты, если они вам нужны -->

<script setup>
// Пустой <script setup> для будущего кода
</script>

<style scoped>
.navbar {
    background-color: #333;
    color: white;
    padding: 0.5rem 1rem;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-brand {
    font-weight: bold;
    color: white;
    text-decoration: none;
}

.navbar-menu {
    display: flex;
}

.navbar-item {
    margin-left: 1rem;
    color: white;
    text-decoration: none;
}

.navbar-item:hover {
    text-decoration: underline;
}
</style>
