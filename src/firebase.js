import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAfXjfQJZcSIEWjfQRAcNbbkHRmzar9-Zk",
  authDomain: "clone-54877.firebaseapp.com",
  projectId: "clone-54877",
  storageBucket: "clone-54877.appspot.com",
  messagingSenderId: "690503232355",
  appId: "1:690503232355:web:19712c9b6e51797eea8156",
  measurementId: "G-6B4D1QC5LJ",
});

const db = firebaseApp.firestore();

export { db };
