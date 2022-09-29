import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCC1kGvsyqbYWqJOY1ESs-P9OFwniJYhI",
  authDomain: "twitter-clone-9cae4.firebaseapp.com",
  projectId: "twitter-clone-9cae4",
  storageBucket: "twitter-clone-9cae4.appspot.com",
  messagingSenderId: "947640196880",
  appId: "1:947640196880:web:c5fd099df29717ced94f95",
  measurementId: "G-CX2QTZXE2C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
