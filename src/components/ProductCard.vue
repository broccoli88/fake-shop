<script setup>
import AppButton from './AppButton.vue'
import { useRouter } from 'vue-router'

const props = defineProps({
    product: Object
})

const router = useRouter()

const showProductDetails = () => {
    router.push({ name: 'product-details', params: { id: props.product.id } })
}
</script>

<template>
    <article class="px-3 py-5 border-black border-2 rounded-xl shadow-lg grid grid-flow-row gap-4">
        <picture class="h-80">
            <img :src="product.image" alt="" />
        </picture>
        <section class="grid gap-4">
            <header class="grid gap-2">
                <h3>{{ product.title }}</h3>
                <p class="text-lg font-medium">Price: ${{ product.price }}</p>
            </header>
            <AppButton class="self-end" @click="showProductDetails"> Show Details</AppButton>
        </section>
    </article>
</template>

<style scoped></style>
