// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEZbQ9tcZ63ofBO1PVvsAlxDwLxc17XmE",
  authDomain: "calendar-app-2dc1a.firebaseapp.com",
  projectId: "calendar-app-2dc1a",
  storageBucket: "calendar-app-2dc1a.appspot.com",
  messagingSenderId: "679507135760",
  appId: "1:679507135760:web:4fedba18e1580fe8822995"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

