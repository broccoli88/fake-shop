<script setup>
import AppInput from './AppInput.vue'
import AppButton from './AppButton.vue'
import { useUserStore } from '../stores/useUserStore'
import { storeToRefs } from 'pinia'

const userStore = useUserStore(),
    { loginInputData, loginState, vL, isUserSignedIn } = storeToRefs(userStore)
</script>

<template>
    <div
        class="login-window rounded-lg p-4 grid gap-2 shadow-xl absolute top-full right-0 bg-white"
    >
        <form @submit.prevent="userStore.submitLoginForm" v-if="!isUserSignedIn">
            <AppInput
                v-model.trim="loginState.email"
                :label="loginInputData.email.label"
                :id="loginInputData.email.id"
                :placeholder="loginInputData.email.placeholder"
                :v="vL.email"
                type="email"
            />
            <AppInput
                v-model.trim="loginState.password"
                :label="loginInputData.password.label"
                :id="loginInputData.password.id"
                :placeholder="loginInputData.password.placeholder"
                :v="vL.password"
                type="password"
            />
            <AppButton type="submit" class="mt-4">log in</AppButton>
        </form>
        <AppButton @click="userStore.signUserOut()" v-else>Log Out</AppButton>
    </div>
</template>

<style scoped>
.login-window {
    top: calc(100% + 16px);
}
</style>
