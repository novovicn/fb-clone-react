// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDiuEhSb3tsAjxdelhCOe6bDZl-oma67Dc",
    authDomain: "facebook-clone-768e9.firebaseapp.com",
    databaseURL: "https://facebook-clone-768e9.firebaseio.com",
    projectId: "facebook-clone-768e9",
    storageBucket: "facebook-clone-768e9.appspot.com",
    messagingSenderId: "129960264238",
    appId: "1:129960264238:web:48f8157980ee4879b255bf",
    measurementId: "G-9XTRDXWBFH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;