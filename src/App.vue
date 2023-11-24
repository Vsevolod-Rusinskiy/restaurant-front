<template>
    <Navbar />
    <router-view />
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>

<script setup lang="ts">
import Navbar from '@/components/Layout/Navbar.vue'
</script>
