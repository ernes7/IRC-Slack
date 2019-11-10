import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyAgPgUQAzbhLY5JAEEvhc2b7O3jDXrwoyc",
    authDomain: "irc-494.firebaseapp.com",
    databaseURL: "https://irc-494.firebaseio.com",
    projectId: "irc-494",
    storageBucket: "irc-494.appspot.com",
    messagingSenderId: "94285536820",
    appId: "1:94285536820:web:2e60c0951bfc4711a37461",
    measurementId: "G-RPVEB5SXNC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;