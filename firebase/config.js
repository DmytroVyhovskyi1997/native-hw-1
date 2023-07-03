
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyAqImCACsJo7fAzprOtwdtqQXygvi0cEOg",
  authDomain: "native-hw-1.firebaseapp.com",
  projectId: "native-hw-1",
  storageBucket: "native-hw-1.appspot.com",
  messagingSenderId: "379568802637",
  appId: "1:379568802637:web:540550cfb3fd2a9a268504",
  measurementId: "G-RKL6M5C2EJ",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
