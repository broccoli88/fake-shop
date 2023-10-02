<script setup>
import AppButton from './AppButton.vue'
import { useUserStore } from '../stores/useUserStore'
import { storeToRefs } from 'pinia'

const userStore = useUserStore(),
    { showRegisterModal } = storeToRefs(userStore)

const closeRegisterModal = () => (showRegisterModal.value = false)
</script>

<template>
    <div class="w-screen h-screen fixed top-0 left-0 backdrop-blur-sm grid place-content-center">
        <div class="bg-white p-10 border-2 border-black shadow-lg rounded-lg grid gap-5">
            <p class="text-lg">Email already exists</p>
            <AppButton @click="closeRegisterModal">close</AppButton>
        </div>
    </div>
</template>

<style scoped></style>
