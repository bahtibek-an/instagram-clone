import Firebase from "firebase/compat/app";
import firebaseAuthServices from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth"
import "firebase/compat/storage";
// import { seedDatabase } from "../seed.js";

const config = {
    apiKey: "AIzaSyDQT6q5N38luNjiL06niCXXTX8lql43wis",
    authDomain: "instagram-fr-fec30.firebaseapp.com",
    projectId: "instagram-fr-fec30",
    storageBucket: "instagram-fr-fec30.appspot.com",
    messagingSenderId: "440398356042",
    appId: "1:440398356042:web:4ff029c42317f6af4150b3"
}

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export const storage = firebase.storage();
export { firebase, FieldValue };
