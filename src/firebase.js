// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg_WKXiusyn7BxzfIaxsIq8KeS4eZmWtA",
  authDomain: "portfolio-9a196.firebaseapp.com",
  projectId: "portfolio-9a196",
  storageBucket: "portfolio-9a196.appspot.com",
  messagingSenderId: "319743852145",
  appId: "1:319743852145:web:0c2f7e36b11f8e2222e5d0",
  measurementId: "G-Q5Y5SXFKE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);