// Import the functions you need from the SDKs you need
// import dotenv from "dotenv";
// dotenv.config();
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    RecaptchaVerifier,
    signInWithPhoneNumber,

} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import {
    getFirestore,
    doc,
    setDoc,
    serverTimestamp,
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    onSnapshot,
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyAlW7q-eNUoKDsw6BOGKLv5kQPnaghCyHQ",
    // authDomain: "e-comerrece-website.firebaseapp.com",
    // projectId: "e-comerrece-website",
    // storageBucket: "e-comerrece-website.firebasestorage.app",
    // messagingSenderId: "436316035613",
    // appId: "1:436316035613:web:d7c6f139ab27912953c4f4"

  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

export {
    getAuth,
    initializeApp,
    firebaseConfig,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    getFirestore,
    doc,
    setDoc,
    serverTimestamp,
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    onSnapshot,
}
