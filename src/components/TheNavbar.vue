<script setup>
import AppButton from './AppButton.vue'
import AppLoginWindow from './AppLoginWindow.vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/useUserStore'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

const router = useRouter()
const userStore = useUserStore()
const { signedInUser, isUserSignedIn, isLoginWindowOpen } = storeToRefs(userStore)

const userState = computed(() => (isUserSignedIn.value ? signedInUser.value : 'log in'))

const goToRegisterForm = () => router.push({ name: 'register' })
const showLoginWindow = () => (isLoginWindowOpen.value = !isLoginWindowOpen.value)
</script>

<template>
    <header class="py-4 shadow-md">
        <div class="flex justify-between max-w-screen-lg mx-auto items-center relative">
            <router-link :to="{ name: 'product-list' }" class="font-bold uppercase text-2xl"
                >Awesome stuff</router-link
            >
            <nav class="flex gap-4">
                <div class="grid relative">
                    <AppButton class="px-4 aspect-auto">
                        <Icon icon="iconoir:cart" />
                    </AppButton>
                    <div
                        class="bg-black rounded-full w-7 h-7 grid place-content-center text-white absolute -bottom-2 -right-2 border-2 border-white"
                    >
                        0
                    </div>
                </div>
                <AppButton @click="showLoginWindow"> {{ userState }}</AppButton>
                <AppButton
                    class="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                    @click="goToRegisterForm"
                >
                    register
                </AppButton>
            </nav>
            <AppLoginWindow class="login-window" v-if="isLoginWindowOpen" />
        </div>
    </header>
</template>

<style scoped></style>
