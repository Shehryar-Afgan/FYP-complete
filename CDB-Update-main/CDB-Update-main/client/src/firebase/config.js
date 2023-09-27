import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWaLf7xi9y-ab17GHNs9FI2xcJ-ImcXrU",
  authDomain: "career-development-cycle.firebaseapp.com",
  projectId: "career-development-cycle",
  storageBucket: "career-development-cycle.appspot.com",
  messagingSenderId: "39227542822",
  appId: "1:39227542822:web:daeb4df35857d0c900c5e7",
  measurementId: "G-0DMH42KQPT",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
