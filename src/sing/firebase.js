// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDcs8VuJ9nWAgN6q3Y5J8doaWGmQ9vVWPE",
  authDomain: "eccomerce-f5a8b.firebaseapp.com",
  projectId: "eccomerce-f5a8b",
  storageBucket: "eccomerce-f5a8b.appspot.com",
  messagingSenderId: "531172002823",
  appId: "1:531172002823:web:48e49717f21ae77519aea2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 
const  auth= firebase.auth()


export {auth}