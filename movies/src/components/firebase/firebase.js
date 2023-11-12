import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBW6EZd28speXeTvL4z5hJLTJ4U8d1eVfk",
    authDomain: "react-movies-lab.firebaseapp.com",
    projectId: "react-movies-lab",
    storageBucket: "react-movies-lab.appspot.com",
    messagingSenderId: "699152525061",
    appId: "1:699152525061:web:eadfe201b0cedb5c8ff96c",
    measurementId: "G-WL183Y0RM1"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);