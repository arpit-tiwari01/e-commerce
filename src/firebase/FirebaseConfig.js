import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

//  Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "myecom-14fc6.firebaseapp.com",
  projectId: "myecom-14fc6",
  storageBucket: "myecom-14fc6.appspot.com",
  messagingSenderId: "166761879565",
  appId: "1:166761879565:web:3fde760e9b97d470611d44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }

