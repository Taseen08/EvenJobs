import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCDsy6iM9W-YEtum2ccFIUuVPaT3fhH9M",
  authDomain: "evenjobs-abc6e.firebaseapp.com",
  projectId: "evenjobs-abc6e",
  storageBucket: "evenjobs-abc6e.appspot.com",
  messagingSenderId: "95889535298",
  appId: "1:95889535298:web:01996935e63d302ef498db",
  measurementId: "G-MN90MCBEMJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
