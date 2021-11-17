// Import the functions you need from the SDKs you need
// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmzH5TFG93mrZZ_szNZwindfwwdXfnPIY",
  authDomain: "courseshopper-c6b44.firebaseapp.com",
  projectId: "courseshopper-c6b44",
  storageBucket: "courseshopper-c6b44.appspot.com",
  messagingSenderId: "902611348397",
  appId: "1:902611348397:web:a9b8505b1274a4b32dcf24"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const signUp = async (name, email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    alert(err.message);
  }
};
const resetPwd = async (email) => {
  try {
    await sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signIn,
  signUp,
  resetPwd,
  logout,
};