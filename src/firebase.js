// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLBEsl8HqfmnGV6QyTheNUA1Q_7RVRe9k",
  authDomain: "fund-db-8383c.firebaseapp.com",
  projectId: "fund-db-8383c",
  storageBucket: "fund-db-8383c.firebasestorage.app",
  messagingSenderId: "877655551705",
  appId: "1:877655551705:web:269549f556f65ebbd018c8",
  measurementId: "G-L1RMKHSMC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);