// Import the functions you need from the SDKs you need
import firebase from "firebase";

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

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();


const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const signupWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    console.log('this is log');
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  console.log('logout');
  auth.signOut();
};
export {
  auth,
  db,
  signInWithEmailAndPassword,
  signupWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};
