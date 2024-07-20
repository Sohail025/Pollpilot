// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByFVxCItq5VwKr1_0ZCX_YvpDfGjFEoEY",
  authDomain: "pollpilot-6da8b.firebaseapp.com",
  projectId: "pollpilot-6da8b",
  storageBucket: "pollpilot-6da8b.appspot.com",
  messagingSenderId: "447450417943",
  appId: "1:447450417943:web:ddfdb9ac4713a200f70552",
  measurementId: "G-3RJ9CTVDTB",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider(app);
