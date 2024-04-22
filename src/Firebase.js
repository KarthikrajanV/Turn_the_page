
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCsP_JLKfpOZVpWKhpCfeURCD_HgF9mDe8",
  authDomain: "turn-the-page-46933.firebaseapp.com",
  projectId: "turn-the-page-46933",
  storageBucket: "turn-the-page-46933.appspot.com",
  messagingSenderId: "722956880123",
  appId: "1:722956880123:web:19f3781f7276b0a193885e",
  measurementId: "G-KHJW0SRH9V"
};

  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);