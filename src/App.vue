<script setup>
import TheNavbar from './components/TheNavbar.vue'
import { RouterView } from 'vue-router'
import { useProductStore } from './stores/useProductStore'
import { useFetchAllProducts } from './api/useFetchAllProducts'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const productStore = useProductStore(),
    { products } = storeToRefs(productStore)

onMounted(async () => {
    products.value = await useFetchAllProducts()
    console.log(products.value)
})
</script>

<template>
    <TheNavbar />
    <main class="max-w-screen-lg mx-auto py-24">
        <RouterView />
    </main>
</template>

<style scoped></style>
