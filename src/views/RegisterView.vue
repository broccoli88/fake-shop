<script setup>
import AppButton from '../components/AppButton.vue'
import AppInput from '../components/AppInput.vue'
import AppGoBackButton from '../components/AppGoBackButton.vue'
import RegisterModal from '../components/RegisterModal.vue'
import { useUserStore } from '../stores/useUserStore'
import { storeToRefs } from 'pinia'

const userStore = useUserStore(),
    { registerState, registerInputData, vR, showRegisterModal } = storeToRefs(userStore)
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
                :v="vR.firstName"
            />
            <AppInput
                v-model.trim="registerState.lastName"
                :label="registerInputData.lastName.label"
                :id="registerInputData.lastName.id"
                :placeholder="registerInputData.lastName.placeholder"
                :v="vR.lastName"
            />
            <AppInput
                v-model.trim="registerState.email"
                :label="registerInputData.email.label"
                :id="registerInputData.email.id"
                :placeholder="registerInputData.email.placeholder"
                :v="vR.email"
                type="email"
            />
            <AppInput
                v-model.trim="registerState.password.password"
                :label="registerInputData.password.label"
                :id="registerInputData.password.id"
                :placeholder="registerInputData.password.placeholder"
                :v="vR.password.password"
                type="password"
            />
            <AppInput
                v-model.trim="registerState.password.repeatPassword"
                :label="registerInputData.repeatPassword.label"
                :id="registerInputData.repeatPassword.id"
                :placeholder="registerInputData.repeatPassword.placeholder"
                :v="vR.password.repeatPassword"
                type="password"
            />
            <AppButton type="submit" class="mt-12 justify-self-center">Submit</AppButton>
        </form>

        <Teleport to="body">
            <RegisterModal v-if="showRegisterModal" />
        </Teleport>
    </div>
</template>

<style scoped></style>
