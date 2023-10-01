import { createRouter, createWebHistory } from 'vue-router'
import ProductListView from '../views/ProductListView.vue'
import { useProductStore } from '../stores/useProductStore.js'
import { storeToRefs } from 'pinia'
import { useFetchProduct } from '../api/useFetchProduct.js'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'product-list',
            component: ProductListView
        },
        {
            path: '/product-details/:id',
            name: 'product-details',
            component: () => import('../views/ProductDetailsView.vue')
        }
    ]
})

router.beforeEach(async (to, from, next) => {

    const productStore = useProductStore(),
        { product } = storeToRefs(productStore)

    if (to.name === 'product-details') {
        product.value = await useFetchProduct(to.params.id)
        console.log(product.value)
    }
    next()
})

export default router