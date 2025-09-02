
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD0ojxnB-5Z5d_Clqju9SaoTdn4gki10tM",
  authDomain: "prepvise-c36a6.firebaseapp.com",
  projectId: "prepvise-c36a6",
  storageBucket: "prepvise-c36a6.firebasestorage.app",
  messagingSenderId: "411741250727",
  appId: "1:411741250727:web:f1fdfca14c3ace2cf86782",
  measurementId: "G-MNS9RJ1B6S"
};



// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);