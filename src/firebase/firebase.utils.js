import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyApgyFcsIYKn0JpCvif04199TNSo2KBALc",
  authDomain: "ecomerce-website.firebaseapp.com",
  databaseURL: "https://ecomerce-website.firebaseio.com",
  projectId: "ecomerce-website",
  storageBucket: "ecomerce-website.appspot.com",
  messagingSenderId: "971340902629",
  appId: "1:971340902629:web:8c4f76e9f5d93dafad240c",
  measurementId: "G-HT1X23NDQ6"
};

firebase.initializeApp(config);

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   const userRef = firestore.doc(`users/${userAuth.uid}`);

//   const snapShot = await userRef.get();

//   if (!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additionalData
//       });
//     } catch (error) {
//       console.log("error creating user", error.message);
//     }
//   }

//   return userRef;
// };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
