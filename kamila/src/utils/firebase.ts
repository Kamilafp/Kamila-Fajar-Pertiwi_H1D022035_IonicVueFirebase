// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDYvo1CGKAXx4Uu402w7uh895zFOKXeTQs",
  authDomain: "kamila-76d26.firebaseapp.com",
  projectId: "kamila-76d26",
  storageBucket: "kamila-76d26.firebasestorage.app",
  messagingSenderId: "762193193992",
  appId: "1:762193193992:web:e393efbc6b4c62231c35bd",
  measurementId: "G-1JSB6N67FK"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };