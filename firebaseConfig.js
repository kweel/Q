import { initializeApp } from "firebase/app";
import  { get, getFirestore } from "firebase/firestore"

// firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCZoSrcDSyOdPju-1SZ3S18WTjRFCiMMkM",
    authDomain: "q-407-ba1c7.firebaseapp.com",
    projectId: "q-407-ba1c7",
    storageBucket: "q-407-ba1c7.appspot.com",
    messagingSenderId: "241617465106",
    appId: "1:241617465106:web:1a1bc1e0689fd7a1b04dcb"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);