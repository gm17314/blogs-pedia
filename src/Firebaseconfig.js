import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDteUKxJyuZhvpERxt8QVWZu3A_WrSC9f8",
  authDomain: "blogs-pedia.firebaseapp.com",
  projectId: "blogs-pedia",
  storageBucket: "blogs-pedia.appspot.com",
  messagingSenderId: "905214335620",
  appId: "1:905214335620:web:d91dd4359aa90fc5cdc0d1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)