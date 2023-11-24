<template>
    <div class="menu">
        <div v-for="category in menuItems" :key="category.category" class="menu-category">
            <h2>{{ category.category }}</h2>
            <ul>
                <li v-for="item in category.items" :key="item.id">
                    <MenuItemCard :title="item.name" :description="item.description" :price="item.price" />
                </li>
            </ul>
        </div>
        <!--        <UIButton buttonText="Нажми меня"/>-->
    </div>
</template>

<script setup>
import UIButton from '@/components/UI/Button.vue'
import MenuItemCard from '@/components/UI/MenuItemCard.vue'

const menuItems = [
    {
        category: 'Галактические Закуски',
        items: [
            {
                id: 1,
                name: 'Метеоритные Крокеты',
                description: 'Хрустящие крокеты из моллюсков с марсианскими специями.',
                price: 8.5,
            },
            {
                id: 2,
                name: 'Салат "Нептун"',
                description: 'Легкий салат из водорослей с добавлением звездной пыли.',
                price: 7.3,
            },
            {
                id: 3,
                name: 'Лунные Сырные Шарики',
                description: 'Шарики из сыра, созданные под невесомостью.',
                price: 9.0,
            },
            { id: 4, name: 'Кометные Оливки', description: 'Оливки, маринованные в космическом вермуте.', price: 6.5 },
            {
                id: 5,
                name: 'Кольца Сатурна',
                description: 'Хрустящие кальмары, обжаренные в пряностях с дальних планет.',
                price: 8.2,
            },
        ],
    },
    {
        category: 'Звездные Основные Блюда',
        items: [
            {
                id: 6,
                name: 'Астероидный Бургер',
                description: 'Сочный бургер с мясом космического волована.',
                price: 12.0,
            },
            {
                id: 7,
                name: 'Тритоновая Треска',
                description: 'Треска, пойманная в метановых морях Тритона.',
                price: 14.5,
            },
            {
                id: 8,
                name: 'Ракетный Ризотто',
                description: 'Ризотто с экзотическими грибами, собранными на астероидных полях.',
                price: 11.0,
            },
            {
                id: 9,
                name: 'Гравитационная Говядина',
                description: 'Говядина, медленно вращенная в условиях измененной гравитации.',
                price: 16.75,
            },
            { id: 10, name: 'Космо-Курица', description: 'Курица, запеченная с квазарным перцем.', price: 13.6 },
        ],
    },
    {
        category: 'Инопланетные Десерты',
        items: [
            { id: 11, name: 'Черная Дыра', description: 'Темный шоколадный мусс с черничным кулером.', price: 6.9 },
            { id: 12, name: 'Млечный Путь', description: 'Сливочное мороженое с звездной крошкой.', price: 5.8 },
            {
                id: 13,
                name: 'Пыльца Пульсара',
                description: 'Легкий десерт, приправленный пыльцой из космических цветов.',
                price: 7.4,
            },
            {
                id: 14,
                name: 'Венерианский Велвет',
                description: 'Бархатный крем-брюле с сюрпризом внутри.',
                price: 8.5,
            },
            { id: 15, name: 'Облака Юпитера', description: 'Пушистые пончики с малиновой начинкой.', price: 6.0 },
        ],
    },
]
</script>

<style scoped>
.menu {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr)); /* Проценты вместо пикселей */
    grid-gap: 20px; /* Отступы между плитками */
    padding: 20px; /* Отступ внутри контейнера сетки */
    /* Убедитесь, что у .menu нет фиксированных ширин */
}

.menu-category {
    background: #f8f8f8; /* Легкий фон для контраста */
    border-radius: 8px; /* Скругление углов */
    overflow: hidden; /* Обрезка содержимого по скругленным углам */
}

.menu-category h2 {
    font-size: 28px;
    color: #4a4a4a;
    padding: 20px; /* Пространство вокруг заголовка */
    background: #eaeaea; /* Фон для заголовка категории */
    margin: 0; /* Убираем стандартные отступы */
}

.menu-category ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu-category li {
    padding: 20px; /* Больше пространства внутри плитки */
    background: white; /* Белый фон для плиток */
    margin: 0; /* Убираем стандартные отступы */
}

.menu-category li:last-child {
    border-bottom: none; /* Убираем границу у последней плитки */
}
</style>
