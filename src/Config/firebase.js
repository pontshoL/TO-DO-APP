// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBgDIYLa3GhWRLJSgbIpKlcVs_6XWqA-Dk",
  authDomain: "to-do-app-55380.firebaseapp.com",
  projectId: "to-do-app-55380",
  storageBucket: "to-do-app-55380.appspot.com",
  messagingSenderId: "568540414790",
  appId: "1:568540414790:web:761bd2a145036a1bb71b47",
  measurementId: "G-F157WG7X1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {auth, db};