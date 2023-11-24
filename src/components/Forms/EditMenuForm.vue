<template>
    <form @submit.prevent="handleSubmit" class="admin-form">
        <div class="admin-form__group">
            <label for="category" class="admin-form__label">Категория:</label>
            <select id="category" v-model="form.categoryId" class="admin-form__control">
                <option v-for="category in categories" :value="category.id" :key="category.id">
                    {{ category.name }}
                </option>
            </select>
        </div>
        <div class="admin-form__group">
            <label for="name" class="admin-form__label">Название блюда:</label>
            <input type="text" id="name" v-model="form.name" class="admin-form__control" />
        </div>

        <div class="admin-form__group">
            <label for="description" class="admin-form__label">Описание:</label>
            <textarea id="description" v-model="form.description" class="admin-form__control"></textarea>
        </div>

        <div class="admin-form__group">
            <label for="price" class="admin-form__label">Цена:</label>
            <input type="number" id="price" min="0" v-model.number="form.price" class="admin-form__control" />
        </div>

        <div class="admin-form__group">
            <label for="image" class="admin-form__label">Изображение:</label>
            <input type="file" id="image" @change="handleFileChange" class="admin-form__control" />
        </div>

        <button type="submit" class="admin-form__button">{{ isEditing ? 'Обновить' : 'Добавить' }}</button>
    </form>
    <div>
        <button type="button" @click="resetForm" class="">Очистить форму</button>
    </div>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue'
import axios from 'axios'
import { useAuthStore } from '@/store/modules/authStore'

const emit = defineEmits(['updateList', 'reset-editing', 'submit'])

const props = defineProps({
    editingItem: Object,
    isEditing: Boolean,
    categories: Array,
})

const form = ref({
    id: null,
    name: '',
    description: '',
    price: null,
    image: null,
    categoryId: null,
})

const resetForm = () => {
    form.value = {
        id: null,
        name: '',
        description: '',
        price: null,
        image: null,
        categoryId: null,
    }
    emit('reset-editing')
}

watch(
    () => props.editingItem,
    (newItem) => {
        if (newItem) {
            form.value = { ...newItem }
        } else {
            resetForm()
        }
    },
    { immediate: true }
)

const handleSubmit = async () => {
    const authStore = useAuthStore()
    const token = authStore.token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        },
    }
    try {
        const formData = new FormData()
        formData.append('name', form.value.name)
        formData.append('description', form.value.description)
        formData.append('price', form.value.price)
        formData.append('categoryId', form.value.categoryId)
        if (form.value.image) {
            formData.append('image', form.value.image, form.value.image.name)
        }

        let response
        if (props.isEditing && form.value.id) {
            response = await axios.put(`${process.env.VUE_APP_API_URL}/menu-items/${form.value.id}`, formData, config)
        } else {
            response = await axios.post(`${process.env.VUE_APP_API_URL}/menu-items`, formData, config)
        }

        if (response) {
            emit('updateList', response.data)
        }

        resetForm()
    } catch (error) {
        console.error('Ошибка при отправке данных:', error)
    }
}

const handleFileChange = (event) => {
    form.value.image = event.target.files[0]
}
</script>

<style lang="scss" scoped>
.admin-form {
    max-width: 600px;
    padding: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 2rem auto 5px;
    border: 1px solid #ccc;

    &__group {
        margin-bottom: 1rem;
    }

    &__label {
        display: block;
        margin-bottom: 0.5rem;
    }

    &__control {
        width: 100%;
        padding: 0.5rem;
        margin-bottom: 1rem;
        border: 1px solid #ccc;

        &[type='file'] {
            margin-bottom: 1rem;
        }
    }

    &__button {
        padding: 0.5rem 1rem;
        background-color: #5cb85c;
        color: white;
        border: none;
        cursor: pointer;

        &:hover {
            background-color: #4cae4c;
        }
    }
}
</style>
