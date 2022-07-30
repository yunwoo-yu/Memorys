// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzWdv8N5eIaLBRsRyn72jCngr5AQPQs4k",
  authDomain: "react-recipe-11ba5.firebaseapp.com",
  databaseURL: "https://react-recipe-11ba5-default-rtdb.firebaseio.com",
  projectId: "react-recipe-11ba5",
  storageBucket: "react-recipe-11ba5.appspot.com",
  messagingSenderId: "465242654399",
  appId: "1:465242654399:web:a84df316f00da0ee81280a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
