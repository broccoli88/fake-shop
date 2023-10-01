<script setup>
import ProductCard from '../components/ProductCard.vue'
import { useProductStore } from '../stores/useProductStore'
import { storeToRefs } from 'pinia'

const productStore = useProductStore(),
    { products } = storeToRefs(productStore)
</script>

<template>
    <section class="product-list" v-if="products.length > 0">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </section>
</template>

<style scoped>
.product-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
    gap: 1rem;
}
</style>
