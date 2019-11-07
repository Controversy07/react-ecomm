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

  export const createUserProfileDocument=async(userAuth, additionalData) =>
  {
    if(!userAuth) return;
    const userRef= firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists)
    {
      const{displayName, email}=userAuth;
      const createdAt= new Date();
      try
      {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData

          })
      }
      catch (e)
      {
        console.log("error occured-:"+e.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth =firebase.auth();
  export const firestore = firebase.firestore();

  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
