// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD27XZ3ummE63hvqwkEmlQRa_CnkKcGLuw",
    authDomain: "ahmed-gi1.firebaseapp.com",
    projectId: "ahmed-gi1",
    storageBucket: "ahmed-gi1.appspot.com",
    messagingSenderId: "758573328672",
    appId: "1:758573328672:web:a6c53b5b6517832b0c4f45",
    measurementId: "G-ELBDR2DGQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);