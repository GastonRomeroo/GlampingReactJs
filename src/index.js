import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWOD327noMyEDTA9x7v_Oi2XeGCFF9QM8",
  authDomain: "glampingreactjs.firebaseapp.com",
  projectId: "glampingreactjs",
  storageBucket: "glampingreactjs.appspot.com",
  messagingSenderId: "1037472277120",
  appId: "1:1037472277120:web:411720b8e6fc8e4823fc65"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);