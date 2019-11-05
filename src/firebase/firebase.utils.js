import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCIzxXR7WANBQOOxhfnWXDiiFGlTAwa1ps",
    authDomain: "e-commerce-db-57835.firebaseapp.com",
    databaseURL: "https://e-commerce-db-57835.firebaseio.com",
    projectId: "e-commerce-db-57835",
    storageBucket: "e-commerce-db-57835.appspot.com",
    messagingSenderId: "645641725303",
    appId: "1:645641725303:web:3b8b2e85bd768661ba2d72",
    measurementId: "G-F33JMW6PE7"
  };

  firebase.initializeApp(config);

  export const auth =firebase.auth();
  export const firestore = firebase.firestore();

  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
