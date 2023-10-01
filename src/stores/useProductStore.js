import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore('productStore', () => {
    const products = ref([])
    const product = ref(null)

    return { products, product }
})