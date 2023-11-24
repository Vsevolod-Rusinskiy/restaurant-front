<template>
    <button @click="onClick">{{ buttonText }}</button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    buttonText: {
        type: String,
        default: 'Click Me',
    },
})

const onClick = () => {
    alert('Button clicked!')
}
</script>

<style scoped>
button {
    background-color: #4caf50;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
</style>
