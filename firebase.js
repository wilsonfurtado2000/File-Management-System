// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDakUY4d-62Mo3TaOfdCXcjnh5Ste2IwcI",
    authDomain: "netflix-385de.firebaseapp.com",
    databaseURL: "https://netflix-385de.firebaseio.com",
    projectId: "netflix-385de",
    storageBucket: "netflix-385de.appspot.com",
    messagingSenderId: "5370725181",
    appId: "1:5370725181:web:89ba3be143e3c4d52abb54",
    measurementId: "G-H56GHD2WHE"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  const db = firebaseApp.firestore();

  export {auth,provider,db,storage}
  