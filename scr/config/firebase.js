// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgdymtqzV4tXdGOH8ZbR32NrSoEwjNEjw",
  authDomain: "info-gabriel-6654a.firebaseapp.com",
  projectId: "info-gabriel-6654a",
  storageBucket: "info-gabriel-6654a.appspot.com",
  messagingSenderId: "1058507239288",
  appId: "1:1058507239288:web:c4fbd5a7548206a053228d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };