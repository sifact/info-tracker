// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHFmmDjCKF2Eialwee_GTH5Qjw2PyzpQs",
    authDomain: "secquraise-2339c.firebaseapp.com",
    databaseURL: "https://secquraise-2339c-default-rtdb.firebaseio.com",
    projectId: "secquraise-2339c",
    storageBucket: "secquraise-2339c.appspot.com",
    messagingSenderId: "83856790138",
    appId: "1:83856790138:web:f4f75c0639d5cc5c65e1c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);
