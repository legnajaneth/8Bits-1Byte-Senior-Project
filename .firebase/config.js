// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOco1Hs3eQHhHg38d6TvOtXs8y9DDFWAs",
  authDomain: "bits1byte.firebaseapp.com",
  databaseURL: "https://bits1byte-default-rtdb.firebaseio.com",
  projectId: "bits1byte",
  storageBucket: "bits1byte.appspot.com",
  messagingSenderId: "33774961408",
  appId: "1:33774961408:web:d588fef3b48d5e9e7fa9e5",
  measurementId: "G-R7GSGEJQF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, analytics, db };