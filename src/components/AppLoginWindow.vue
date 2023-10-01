<script setup>
import AppInput from './AppInput.vue'
import AppButton from './AppButton.vue'
import { useUserStore } from '../stores/useUserStore'
import { storeToRefs } from 'pinia'

const userStore = useUserStore(),
    { loginInputData, loginState } = storeToRefs(userStore)
</script>

<template>
    <form
        class="login-window rounded-lg p-4 grid gap-2 shadow-xl absolute top-full right-0 bg-white"
        @submit.prevent="userStore.submitLoginForm"
    >
        <AppInput
            v-model.trim="loginState.email"
            :label="loginInputData.email.label"
            :id="loginInputData.email.id"
            :placeholder="loginInputData.email.placeholder"
            type="email"
        />
        <AppInput
            v-model.trim="loginState.password"
            :label="loginInputData.password.label"
            :id="loginInputData.password.id"
            :placeholder="loginInputData.password.placeholder"
            type="password"
        />
        <AppButton type="submit" class="mt-4">log in</AppButton>
    </form>
</template>

<style scoped>
.login-window {
    top: calc(100% + 16px);
}
</style>
