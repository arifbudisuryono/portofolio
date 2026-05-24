// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg2_gTJdVcoSD5W_Qp_FghzfOazBHow5s",
  authDomain: "wedding-arif-indri.firebaseapp.com",
  projectId: "wedding-arif-indri",
  storageBucket: "wedding-arif-indri.firebasestorage.app",
  messagingSenderId: "25104821712",
  appId: "1:25104821712:web:63ca74383463234319ddd5",
  measurementId: "G-EBPJVL96BD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);