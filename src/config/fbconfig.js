import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDorCGNGZuAcK-EDTQbsxPR1z-SzExJqH4",
  authDomain: "todonotasworld.firebaseapp.com",
  projectId: "todonotasworld",
  storageBucket: "todonotasworld.appspot.com",
  messagingSenderId: "966725135385",
  appId: "1:966725135385:web:26f65f55c22d6a70f68e88"
};


firebase.initializeApp(firebaseConfig);
firebase.firestore();
const auth = firebase.auth()
export const deleteUser = firebase.deleteUser


export {auth}
export default firebase