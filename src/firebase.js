// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUeH54_rAm8atoVu3p_kqUfP9eKKmOl7I",
  authDomain: "relu-27c05.firebaseapp.com",
  projectId: "relu-27c05",
  storageBucket: "relu-27c05.appspot.com",
  messagingSenderId: "317358566794",
  appId: "1:317358566794:web:63e6b2e6e8752fbce4ec73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
