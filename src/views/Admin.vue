<template>
    <div class="admin">
        <h1 class="admin__title">Управление Меню</h1>
        <EditMenuForm
            :editingItem="editingItem"
            :isEditing="isEditing"
            :categories="menuStore.menuItemsWithCategories"
            @updateList="updateOrAddMenuList"
            @reset-editing="isEditing = false"
        />
        <div v-for="category in menuStore.menuItemsWithCategories" :key="category.id" class="menu-category">
            <h2 class="menu-category__title">{{ category.name }}</h2>
            <div class="menu-category__list-container">
                <div class="menu-category__list">
                    <div v-for="item in category.items" :key="item.id" class="menu-category__list__item">
                        <div class="menu-category__list__item__image">
                            <img v-if="item.imageUrl" :src="item.imageUrl" alt="Изображение блюда" />
                        </div>
                        <span>{{ item.name }} - {{ item.description }} - {{ item.price }} руб.</span>
                        <div class="menu-category__list__item__controls">
                            <button @click="prepareEdit(item)" class="menu-category__list__item__controls__edit">
                                Редактировать
                            </button>
                            <button @click="deleteItem(item.id)" class="menu-category__list__item__controls__delete">
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import EditMenuForm from '@/components/Forms/EditMenuForm.vue'
import { useMenuStore } from '@/store/modules/menuStore'

const menuStore = useMenuStore()
const editingItem = ref(null)
const isEditing = ref(false)

onMounted(() => {
    menuStore.fetchMenuItems()
})

const prepareEdit = (item) => {
    editingItem.value = { ...item }
    isEditing.value = true
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
}

const deleteItem = async (itemId) => {
    try {
        await menuStore.deleteItem(itemId)
    } catch (error) {
        console.error('Ошибка при удалении элемента меню:', error)
    }
}
const updateOrAddMenuList = (updatedItem) => {
    menuStore.updateOrAddMenuList(updatedItem)
}
</script>

<style lang="scss" scoped>
.admin {
    &__title {
    }

    &__form {
    }
}

.menu-category {
    &__title {
    }

    &__list-container {
        max-width: 60%;
        margin: 0 auto;
    }

    &__list {
        list-style: none;
        padding: 0;
        margin: 0;
        background: #f8f8f8;

        &__item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background: white;
            margin: 0;
            border-bottom: 1px solid #eaeaea;

            &:last-child {
                border-bottom: none;
            }

            &__image {
                min-width: 142px;
                min-height: 80px;
                overflow: hidden;
                margin-right: 30px;

                img {
                    width: 160px;
                    height: 90px;
                    display: block;
                }
            }

            &__controls {
                &__edit,
                &__delete {
                    margin-left: 10px;
                }
            }
        }
    }
}
</style>
