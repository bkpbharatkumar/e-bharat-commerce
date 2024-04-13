// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC46i8XX9JZvkp0E4a9aDpfohd5NpdbMmk",
    authDomain: "ebharatcom.firebaseapp.com",
    projectId: "ebharatcom",
    storageBucket: "ebharatcom.appspot.com",
    messagingSenderId: "425202733347",
    appId: "1:425202733347:web:80b908c32042d577353c96"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }

