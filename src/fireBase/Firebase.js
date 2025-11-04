// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPg_u4CwQxQQW-Rt79GyNCJg0nzyjPCxc",
  authDomain: "react-first-b8d2b.firebaseapp.com",
  projectId: "react-first-b8d2b",
  storageBucket: "react-first-b8d2b.firebasestorage.app",
  messagingSenderId: "1073267599661",
  appId: "1:1073267599661:web:83e0663335d026e53d4ba4",
  measurementId: "G-H7G314CBFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db= getFirestore(app)