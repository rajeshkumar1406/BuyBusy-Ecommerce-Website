
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7HWgGCpkQKMWFRkJZdAh_TGTrYTTlezA",
  authDomain: "buybusy-redux-4d59c.firebaseapp.com",
  projectId: "buybusy-redux-4d59c",
  storageBucket: "buybusy-redux-4d59c.appspot.com",
  messagingSenderId: "414128141975",
  appId: "1:414128141975:web:989bee19d5304b5a34dbd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);