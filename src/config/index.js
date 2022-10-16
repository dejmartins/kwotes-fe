// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
  onAuthStateChanged,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8U38TQKYY9uL_OvH0H7BGAhQWV2rZegg",
  authDomain: "kwotes-1f1a7.firebaseapp.com",
  projectId: "kwotes-1f1a7",
  storageBucket: "kwotes-1f1a7.appspot.com",
  messagingSenderId: "647780895798",
  appId: "1:647780895798:web:6ef4f8453b7eb9d4c3dc97",
  measurementId: "G-ZJY3NSTY44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {
  app,
  provider,
  auth,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
};
