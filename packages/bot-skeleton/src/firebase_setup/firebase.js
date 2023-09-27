// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkVLmtrIaeFqytcZv05SqdFyM0lDQJXSM",
  authDomain: "derivtrader-8670a.firebaseapp.com",
  projectId: "derivtrader-8670a",
  storageBucket: "derivtrader-8670a.appspot.com",
  messagingSenderId: "616660657042",
  appId: "1:616660657042:web:bde99650abb24ad2b9974b",
  measurementId: "G-4VYN9WMZY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);