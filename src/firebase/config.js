import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIfDCV4lvNrZayraSjC2uKvnup6jUajdA",
  authDomain: "form-task-3c9b4.firebaseapp.com",
  projectId: "form-task-3c9b4",
  storageBucket: "form-task-3c9b4.appspot.com",
  messagingSenderId: "637936037352",
  appId: "1:637936037352:web:d57aa2556e361ae2e2485d",
  measurementId: "G-X3FDT4LXWN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
