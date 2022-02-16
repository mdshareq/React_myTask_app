import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXEKY1c5Fg038dQHVrg9va8ZjtQtXwZRY",
  authDomain: "mytask-e36db.firebaseapp.com",
  projectId: "mytask-e36db",
  storageBucket: "mytask-e36db.appspot.com",
  messagingSenderId: "82452084326",
  appId: "1:82452084326:web:4579bf54ba2c44ddc3dfa7",
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

export { db };
