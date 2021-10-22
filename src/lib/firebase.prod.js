// prod = production version
// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// only run this seeDatabase **once** or it will duplicate data in firestore
// import { seedDatabase } from "../seed";

// we need to seed the database

// config
const firebaseConfig = {
    apiKey: "AIzaSyByMkbq26uxU1L_TKgCmNLiuZKRrm7D3jQ",
    authDomain: "netflix-clone-v2-31e72.firebaseapp.com",
    projectId: "netflix-clone-v2-31e72",
    storageBucket: "netflix-clone-v2-31e72.appspot.com",
    messagingSenderId: "1025552307279",
    appId: "1:1025552307279:web:ee25e46d347457f3e9c63a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Never uncomment this or it will re-seed the database with 500 lines of duplicate code
/////////////
//////////////////// seedDatabase(firebaseApp);
//////////////
export { firebaseApp };
