import { defineStore } from 'pinia'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, sameAs } from '@vuelidate/validators'
import { auth, db } from '../firebase/db'
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'


export const useUserStore = defineStore('userStore', () => {

    const user = ref(null)
    const showRegisterModal = ref(false)
    const router = useRouter()
    const goToMainPage = () => router.push({ name: 'product-list' })

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
            password: { required, minLength: minLength(6), maxLength: maxLength(25) },
            repeatPassword: { required, sameAs: sameAs(computed(() => registerState.value.password.password)) }
        }
    }

    const vR = useVuelidate(registerRules, registerState)

    const checkIfUserExist = async (email) => {
        try {
            const check = await fetchSignInMethodsForEmail(auth, email)

            if (check.length === 0) return false
            else {
                showRegisterModal.value = true
                return true
            }

        } catch (error) {
            console.error('Error checking if user exists:', error);
            return false;
        }

    }

    const registerUser = async () => {
        try {
            const createUser = await createUserWithEmailAndPassword(auth, registerState.value.email, registerState.value.password.password)

            user.value = createUser.user
            return createUser.user.uid
        } catch (error) {
            console.error(error)
        }
    }

    const saveNewUser = async (userAuthId) => {
        const newUser = {
            firstName: registerState.value.firstName,
            lastName: registerState.value.lastName,
            email: registerState.value.email,
            authId: userAuthId
        }

        await addDoc(collection(db, 'users'), newUser)
    }

    const clearRegisterFields = () => {
        registerState.value.firstName = ''
        registerState.value.lastName = ''
        registerState.value.email = ''
        registerState.value.password.password = ''
        registerState.value.password.repeatPassword = ''

    }

    const submitRegisterForm = async () => {
        const isFormCorrect = await vR.value.$validate()
        if (!isFormCorrect) return

        const emailExist = await checkIfUserExist(registerState.value.email)
        if (emailExist) return

        const userAuthId = await registerUser()
        await saveNewUser(userAuthId)

        goToMainPage()
        vR.value.$reset()
        clearRegisterFields()
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
        password: { required, minLength: minLength(6), maxLength: maxLength(25) }
    }

    const signedInUser = ref(null)
    const isUserSignedIn = ref(false)
    const isLoginWindowOpen = ref(false)
    const vL = useVuelidate(loginRules, loginState)

    const signUserIn = async () => {
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, loginState.value.email, loginState.value.password)

            signedInUser.value = userCredentials.user.email
            isLoginWindowOpen.value = false
        } catch (error) {
            console.error(error)
        }
    }

    const signUserOut = async () => {
        await auth.signOut()
        isUserSignedIn.value = false
        signedInUser.value = null
        isLoginWindowOpen.value = false
    }

    const getCurrentlySignedInUser = async () => {
        onAuthStateChanged(auth, u => {
            if (u) {
                signedInUser.value = u.email
                isUserSignedIn.value = true
            } else isUserSignedIn.value = false
        })
    }

    const submitLoginForm = async () => {
        const isFormCorrect = await vL.value.$validate()
        if (!isFormCorrect) return

        await signUserIn()
    }

    return {
        registerInputData,
        registerState,
        vR,
        submitRegisterForm,
        loginInputData,
        loginState,
        vL,
        isLoginWindowOpen,
        signedInUser,
        isUserSignedIn,
        showRegisterModal,
        submitLoginForm,
        getCurrentlySignedInUser,
        signUserOut
    }
})