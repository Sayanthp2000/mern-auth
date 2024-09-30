
import { initializeApp } from "firebase/app";




const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-auth-8a33b.firebaseapp.com",
  projectId: "mern-auth-8a33b",
  storageBucket: "mern-auth-8a33b.appspot.com",
  messagingSenderId: "142650936542",
  appId: "1:142650936542:web:02d824cfae2c2b2997064f"
};


export const app = initializeApp(firebaseConfig);