// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_U-ddbsh9YvXq-0VMeQZy3ywzylUVfgg",
    authDomain: "teach-pitch-project.firebaseapp.com",
    projectId: "teach-pitch-project",
    storageBucket: "teach-pitch-project.appspot.com",
    messagingSenderId: "994444982460",
    appId: "1:994444982460:web:f2be8a1ada83f38e49f8b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;