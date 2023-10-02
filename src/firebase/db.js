import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const api_key = import.meta.env.VITE_FIREBASE_API

const firebaseConfig = {
    apiKey: api_key,
    authDomain: "fake-store-cd504.firebaseapp.com",
    projectId: "fake-store-cd504",
    storageBucket: "fake-store-cd504.appspot.com",
    messagingSenderId: "1064503660659",
    appId: "1:1064503660659:web:9f6d89716bd9963cbc5a06"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)


