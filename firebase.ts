// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLa2l8RfQll4Hcb3F3rXDrod9imtt0S2k",
  authDomain: "netflix-clone-c9c7b.firebaseapp.com",
  projectId: "netflix-clone-c9c7b",
  storageBucket: "netflix-clone-c9c7b.appspot.com",
  messagingSenderId: "533016380682",
  appId: "1:533016380682:web:08d81f818ee91ee2d2e6f3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
