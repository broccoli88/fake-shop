<script setup>
import AppGoBackButton from '../components/AppGoBackButton.vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '../stores/useProductStore'

const productStore = useProductStore(),
    { product } = storeToRefs(productStore)
</script>

<template>
    <div class="flex flex-col gap-20">
        <AppGoBackButton />
        <div class="flex gap-20">
            <picture class="w-2/5">
                <img :src="product.image" alt="" />
            </picture>
            <section class="w-3/5">
                <header>
                    <h2>{{ product.title }}</h2>
                </header>
                <div class="grid gap-6 mt-10">
                    <p>Price: ${{ product.price }}</p>
                    <p>Category: {{ product.category }}</p>
                    <p>{{ product.description }}</p>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped></style>
