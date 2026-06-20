// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz-pMZtY7_OVr9IyyHiIqwPWnpP3Lb21w",
  authDomain: "studio-9489287013-59986.firebaseapp.com",
  projectId: "studio-9489287013-59986",
  storageBucket: "studio-9489287013-59986.firebasestorage.app",
  messagingSenderId: "522287974416",
  appId: "1:522287974416:web:096cfdb016260b3f74a295"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app);

export default app;
