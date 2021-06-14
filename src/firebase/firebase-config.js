import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA4vDCfDZ87LTao_qzezkSIOdPHRUYmUQ4",
    authDomain: "react-journal-app-1f997.firebaseapp.com",
    projectId: "react-journal-app-1f997",
    storageBucket: "react-journal-app-1f997.appspot.com",
    messagingSenderId: "47073754721",
    appId: "1:47073754721:web:d433385b87f088116df420"
  };
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
var googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}