
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";



const firebaseConfig = {
  apiKey: "AIzaSyANOOKEXTmuA6ykAnO8x1cTdGEEyN5MKOg",
  authDomain: "raect-native-fa8b3.firebaseapp.com",
  projectId: "raect-native-fa8b3",
  storageBucket: "raect-native-fa8b3.appspot.com",
  messagingSenderId: "98107802320",
  appId: "1:98107802320:web:2b04f3bb5f104a1bda14d5",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);


export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});