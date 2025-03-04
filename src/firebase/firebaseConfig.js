import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcvaZUhqzBYo3DS6FW9JMJ5uqIYSbeKDg",
  authDomain: "fb-evilangel.firebaseapp.com",
  projectId: "fb-evilangel",
  storageBucket: "fb-evilangel.firebasestorage.app",
  messagingSenderId: "142441495808",
  appId: "1:142441495808:web:70fd7f4e85828e11a647e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

