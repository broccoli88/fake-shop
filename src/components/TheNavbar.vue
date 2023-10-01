<script setup>
import AppButton from './AppButton.vue'
</script>

<template>
    <header class="py-4 shadow-md">
        <div class="flex justify-between max-w-screen-lg mx-auto items-center">
            <router-link to="#" class="font-bold uppercase text-2xl">Awesome stuff</router-link>
            <nav class="flex gap-4">
                <AppButton class="px-4 aspect-auto">
                    <Icon icon="iconoir:cart" />
                </AppButton>
                <AppButton>login</AppButton>
                <AppButton class="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                    >register</AppButton
                >
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped></style>
