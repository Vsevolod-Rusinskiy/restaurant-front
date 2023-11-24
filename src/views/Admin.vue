<template>
    <div class="admin-page">
        <h1>Управление Меню</h1>
        <EditMenuForm :item="editingItem" :isEditing="isEditing" @submit="handleFormSubmit" />
        <ul>
            <li v-for="(item, index) in menuItems" :key="item.id">
                {{ item.name }} - {{ item.description }} - {{ item.price }} руб.
                <button @click="prepareEdit(item, index)">Редактировать</button>
                <button @click="deleteItem(index)">Удалить</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import EditMenuForm from '@/components/Forms/EditMenuForm.vue'

const menuItems = ref([])
const editingItem = ref(null)
const isEditing = ref(false)

const handleFormSubmit = (formData) => {
    if (isEditing.value) {
        menuItems.value.splice(menuItems.value.indexOf(editingItem.value), 1, formData)
    } else {
        menuItems.value.push({ ...formData, id: Date.now() })
    }
    resetForm()
}
//ауцацу
const prepareEdit = (item, index) => {
    editingItem.value = { ...item }
    isEditing.value = true
}

const deleteItem = (index) => {
    menuItems.value.splice(index, 1)
    resetForm()
}

const resetForm = () => {
    editingItem.value = null
    isEditing.value = false
}
</script>

<style>
/* Ваши стили для Admin.vue */
</style>
