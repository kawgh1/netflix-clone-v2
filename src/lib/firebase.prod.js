// prod = production version
import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// we need to seed the database

// config
const config = {};

const firebase = Firebase.initializeApp(config);

export { firebase };
