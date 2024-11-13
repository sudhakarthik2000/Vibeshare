
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDchxEbebiD4cHSdfgYZbtn-TfaK3za5Z0",
  authDomain: "vibeshare-d3376.firebaseapp.com",
  projectId: "vibeshare-d3376",
  storageBucket: "vibeshare-d3376.appspot.com",
  messagingSenderId: "405270945962",
  appId: "1:405270945962:web:27654ff5506c36511ef0d3",
  measurementId: "G-E9NJGG7GG2"
}


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export {app,auth,firestore,storage}