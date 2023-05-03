// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// Other libraries might need to also be prefixed with "compat":
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCS7cfFZDSj9N7KA60JZGjaUDctaYv4Lxk",
    authDomain: "gbquiz-3aa9f.firebaseapp.com",
    projectId: "gbquiz-3aa9f",
    storageBucket: "gbquiz-3aa9f.appspot.com",
    messagingSenderId: "476790778463",
    appId: "1:476790778463:web:b1c644431e87b2bdaf09ea",
    measurementId: "G-9YH58RZD65"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const db = firebase.firestore();
export { auth, db};