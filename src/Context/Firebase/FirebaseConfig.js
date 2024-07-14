// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const db = getFirestore(app);

export { db };
