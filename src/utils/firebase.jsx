// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBWTcK3As1PgQJYA2rs4Bqvog8HrIXbR70",
  authDomain: "swiggy-clone-e1a8f.firebaseapp.com",
  projectId: "swiggy-clone-e1a8f",
  storageBucket: "swiggy-clone-e1a8f.appspot.com",
  messagingSenderId: "537877393145",
  appId: "1:537877393145:web:c8c3eb2ca5526cb1853c28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
