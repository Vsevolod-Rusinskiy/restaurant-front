<template>
    <div class="menu">
        <div v-for="category in menuStore.menuItemsWithCategories" :key="category.id" class="menu__category">
            <h2 class="menu__title">{{ category.name }}</h2>
            <ul class="menu__list">
                <li v-for="item in category.items" :key="item.id" class="menu__item">
                    <MenuItemCard
                        :title="item.name"
                        :description="item.description"
                        :price="item.price"
                        :imageUrl="item.imageUrl"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import MenuItemCard from '@/components/UI/MenuItemCard.vue'
import { useMenuStore } from '@/store/modules/menuStore'

const menuStore = useMenuStore()

onMounted(() => {
    menuStore.fetchMenuItems()
})
</script>

<style lang="scss" scoped>
.menu {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
    grid-gap: 20px;
    padding: 20px;

    &__category {
        border-radius: 8px;
        overflow: hidden;
    }

    &__title {
        font-size: 28px;
        color: #4a4a4a;
        padding: 20px;
        background: #eaeaea;
        margin: 0;
        border-radius: 8px 8px 0 0;
    }

    &__list {
        list-style: none;
        padding: 0;
        margin: 0;
        background: #f8f8f8;
    }

    &__item {
        padding: 20px;
        background: white;
        margin: 0;

        &:last-child {
            border-bottom: none;
        }
    }
}
</style>
