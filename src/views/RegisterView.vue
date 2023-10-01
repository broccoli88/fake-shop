<script setup>
import AppButton from '../components/AppButton.vue'
import AppInput from '../components/AppInput.vue'
import AppGoBackButton from '../components/AppGoBackButton.vue'
import { useUserStore } from '../stores/useUserStore'
import { storeToRefs } from 'pinia'

const userStore = useUserStore(),
    { registerState, registerInputData } = storeToRefs(userStore)
</script>

<template>
    <div class="grid gap-16">
        <AppGoBackButton />
        <h1 class="text-center">Register</h1>
        <form
            @submit.prevent="userStore.submitRegisterForm"
            class="border-2 border-black rounded-lg py-8 px-5 grid gap-5 shadow-lg"
        >
            <AppInput
                v-model.trim="registerState.firstName"
                :label="registerInputData.firstName.label"
                :id="registerInputData.firstName.id"
                :placeholder="registerInputData.firstName.placeholder"
            />
            <AppInput
                v-model.trim="registerState.lastName"
                :label="registerInputData.lastName.label"
                :id="registerInputData.lastName.id"
                :placeholder="registerInputData.lastName.placeholder"
            />
            <AppInput
                v-model.trim="registerState.email"
                :label="registerInputData.email.label"
                :id="registerInputData.email.id"
                :placeholder="registerInputData.email.placeholder"
                type="email"
            />
            <AppInput
                v-model.trim="registerState.password.password"
                :label="registerInputData.password.label"
                :id="registerInputData.password.id"
                :placeholder="registerInputData.password.placeholder"
                type="password"
            />
            <AppInput
                v-model.trim="registerState.password.repeatPassword"
                :label="registerInputData.repeatPassword.label"
                :id="registerInputData.repeatPassword.id"
                :placeholder="registerInputData.repeatPassword.placeholder"
                type="password"
            />
            <AppButton type="submit" class="mt-12 justify-self-center">Submit</AppButton>
        </form>
    </div>
</template>

<style scoped></style>
