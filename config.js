// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9uPE_bPYtbwMiodP4TPWf8bzbeHHY5ws",
  authDomain: "fintracker-daaa7.firebaseapp.com",
  projectId: "fintracker-daaa7",
  storageBucket: "fintracker-daaa7.appspot.com",
  messagingSenderId: "181892556797",
  appId: "1:181892556797:web:c5f4f5fbaf4842e9759b94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;