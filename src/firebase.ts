import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyCGwwmd-t-oo14laT6rXRpDth-bvdrWUEM',
    authDomain: 'webit-todo-app.firebaseapp.com',
    projectId: 'webit-todo-app',
    storageBucket: 'webit-todo-app.appspot.com',
    messagingSenderId: '410351364004',
    appId: '1:410351364004:web:2d942316285657e00fc331',
    measurementId: 'G-DEDHG0X0EW',
}

const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
