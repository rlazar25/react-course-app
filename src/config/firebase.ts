// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7govMrZ6twHDuKMCX5o2QHyFCIjjfi1c",
  authDomain: "react-course-3542b.firebaseapp.com",
  projectId: "react-course-3542b",
  storageBucket: "react-course-3542b.appspot.com",
  messagingSenderId: "875658786309",
  appId: "1:875658786309:web:f4337232d18ab0ba1bce6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)