// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjfl8OhrBuQI8sTr3AJglHg6sAhrhzp1s",
    authDomain: "sellhouse-f039f.firebaseapp.com",
    projectId: "sellhouse-f039f",
    storageBucket: "sellhouse-f039f.appspot.com",
    messagingSenderId: "309054336322",
    appId: "1:309054336322:web:1c71befef2dd4968206cdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;