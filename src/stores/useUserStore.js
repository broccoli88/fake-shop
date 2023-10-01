import { defineStore } from 'pinia'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, sameAs } from '@vuelidate/validators'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('userStore', () => {



    // Register 

    const registerInputData = ref({
        firstName: {
            label: 'First Name:',
            id: 'first-name',
            placeholder: 'Enter your first name.'
        },
        lastName: {
            label: 'Last Name:',
            id: 'last-name',
            placeholder: 'Enter your last name.'
        },
        email: {
            label: 'Enter Email:',
            id: 'email',
            placeholder: 'Enter your email.'
        },
        password: {
            label: 'Password:',
            id: 'password',
            placeholder: 'Enter your password.'
        },
        repeatPassword: {
            label: 'Repeat password:',
            id: 'repeat-password',
            placeholder: 'Repeat your password.'
        },
    })

    const registerState = ref({
        firstName: '',
        lastName: '',
        email: '',
        password: {
            password: '',
            repeatPassword: ''
        }
    })

    const registerRules = {
        firstName: { required, minLength: minLength(3), maxLength: maxLength(25) },
        lastName: { required, minLength: minLength(3), maxLength: maxLength(25) },
        email: { required, email },
        password: {
            password: { required, minLength: minLength(3), maxLength: maxLength(25) },
            repeatPassword: { required, sameAs: sameAs(computed(() => registerState.value.password.password)) }
        }
    }

    const vR = useVuelidate(registerRules, registerState)

    const submitRegisterForm = async () => {
        const isFormCorrect = await vR.value.$validate()
        if (!isFormCorrect) return

        console.log(isFormCorrect)
    }

    // Login

    const loginInputData = ref({
        email: {
            label: 'Enter Email:',
            id: 'email',
            placeholder: 'Enter your email.'
        },
        password: {
            label: 'Enter password:',
            id: 'password',
            placeholder: 'Enter your password.'
        },
    })

    const loginState = ref({
        email: '',
        password: ''
    })

    const loginRules = {
        email: { required, email },
        password: { required, minLength: minLength(3), maxLength: maxLength(25) }
    }

    const vL = useVuelidate(loginRules, loginState)

    const submitLoginForm = async () => {
        const isFormCorrect = await vL.value.$validate()
        if (!isFormCorrect) return

        console.log(isFormCorrect)
    }


    return {
        registerInputData,
        registerState,
        vR,
        submitRegisterForm,
        loginInputData,
        loginState,
        vL,
        submitLoginForm
    }
})