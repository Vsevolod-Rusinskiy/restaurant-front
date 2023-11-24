<template>
    <div class="menu-item-card">
        <img v-if="props.imageUrl" :src="props.imageUrl" alt="Фото блюда" class="menu-item-card__image" />
        <h3 class="menu-item-card__title">{{ props.title }}</h3>
        <p class="menu-item-card__description">{{ props.description }}</p>
        <p class="menu-item-card__price">{{ props.price }} руб.</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
})
</script>

<style lang="scss" scoped>
.menu-item-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
    background-color: white;

    &__image {
        width: 100%;
        height: auto;
        border-radius: 8px 8px 0 0;
        object-fit: cover;
        object-position: center;
        aspect-ratio: 16 / 9;
    }

    &__title {
        font-size: 1.5em;
        margin-bottom: 0.5em;
    }

    &__description {
        font-size: 1em;
        margin-bottom: 0.5em;
    }

    &__price {
        font-weight: bold;
        color: #4caf50;
        font-size: 1.2em;
    }
}
</style>
