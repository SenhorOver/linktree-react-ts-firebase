import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGYrtxMrYAFHglLKGCj7hkjVABHbZpjXQ",
  authDomain: "reactlinks-bfc59.firebaseapp.com",
  projectId: "reactlinks-bfc59",
  storageBucket: "reactlinks-bfc59.firebasestorage.app",
  messagingSenderId: "975639051826",
  appId: "1:975639051826:web:98f2d9ec0fc3076025462b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
