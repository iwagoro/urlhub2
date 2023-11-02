// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2z5axEqwKB_Vc89UoVtKyejt9VT8Xg0c",
    authDomain: "urlhub-6847b.firebaseapp.com",
    projectId: "urlhub-6847b",
    storageBucket: "urlhub-6847b.appspot.com",
    messagingSenderId: "507887117269",
    appId: "1:507887117269:web:ce3ad8d64c9db74ff3d35c",
    measurementId: "G-H5KL5X5E5F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, provider, auth };
