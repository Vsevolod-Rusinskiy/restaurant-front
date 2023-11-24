<template>
    <form @submit.prevent="handleSubmit" class="admin-form">
        <div class="form-group">
            <label for="name">Название блюда:</label>
            <input type="text" id="name" v-model="form.name" class="form-control" />
        </div>

        <div class="form-group">
            <label for="description">Описание:</label>
            <textarea id="description" v-model="form.description" class="form-control"></textarea>
        </div>

        <div class="form-group">
            <label for="price">Цена:</label>
            <input type="number" id="price" v-model.number="form.price" class="form-control" />
        </div>

        <div class="form-group">
            <label for="image">Изображение:</label>
            <input type="file" id="image" @change="handleFileChange" class="form-control" />
        </div>

        <button type="submit" class="btn">{{ isEditing ? 'Обновить' : 'Добавить' }}</button>
    </form>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
    item: Object,
    isEditing: Boolean,
})

const form = ref({
    id: null,
    name: '',
    description: '',
    price: null,
    image: null,
})

// Вызывается при монтировании компонента
if (props.item) {
    form.value = { ...props.item }
}

const handleSubmit = () => {
    console.log('Отправка формы:', form.value)
    // Здесь может быть ваш код для отправки данных на сервер
    // Если вы используете события для взаимодействия с родительским компонентом:
    // emit('submit', form.value);
}

const handleFileChange = (event) => {
    form.value.image = event.target.files[0]
}
</script>

<style scoped>
.admin-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 2rem;
}

.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
}

input[type='text'],
input[type='number'],
textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
}

input[type='file'] {
    margin-bottom: 1rem;
}

button {
    padding: 0.5rem 1rem;
    background-color: #5cb85c;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #4cae4c;
}
</style>
