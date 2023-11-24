<template>
    <div class="menu-item-card">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <div class="price">{{ price.toFixed(2) }} ₽</div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    title: String,
    description: String,
    price: Number,
})
</script>

<style>
.menu-item-card {
    border: 1px solid #ccc; /* рамка для карточки */
    border-radius: 8px; /* скругление углов рамки */
    padding: 16px; /* внутренний отступ внутри каждой карточки */
    margin-bottom: 16px; /* отступ снизу для каждой карточки */
    background-color: white; /* фон карточки, чтобы текст был легче читаться */
}

.price {
    font-weight: bold;
    color: #4caf50; /* Зеленый цвет для цены, чтобы выделить */
}
</style>
