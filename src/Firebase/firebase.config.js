// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ3cTTdOZ8a5cDI7f6K9z6L0SsQ3Qj36E",
  authDomain: "dragon-news-world.firebaseapp.com",
  projectId: "dragon-news-world",
  storageBucket: "dragon-news-world.firebasestorage.app",
  messagingSenderId: "61548598397",
  appId: "1:61548598397:web:4c2ef9ecd0d78c21260d14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;