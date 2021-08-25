import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyB7opTc7vX4xU_GPMH3sBFn4nTUE8Q1LZs",
    authDomain: "crwn-db-b0c90.firebaseapp.com",
    projectId: "crwn-db-b0c90",
    storageBucket: "crwn-db-b0c90.appspot.com",
    messagingSenderId: "1058582009277",
    appId: "1:1058582009277:web:58c818669707751f2a6ed4"
  };

  export const createProfileDocument = async(userAuth, additionalData)=>{
          if(!userAuth) return;

      const userRef=firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();
      if(!snapShot.exist){
        const {displayName, email} = userAuth;
        const createdDate = new Date();

        try{
          await userRef.set({
            displayName,
            email,
            createdDate,
            ...additionalData
          }

          )
        }catch(err){
          console.log(err, err.message)
        }
      }
     return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt: 'select_account'})
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
