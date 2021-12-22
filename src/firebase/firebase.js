import firebase from "firebase/app";
import "firebase/auth";

if (!firebase.apps.length) {
  // Paste your config object here ⬇️
  const firebaseConfig = {
    apiKey: "AIzaSyDdehS9S79L0XWEGykb1T_kkITFUmU8Vtw",
    authDomain: "fir-test-a5add.firebaseapp.com",
    projectId: "fir-test-a5add",
    storageBucket: "fir-test-a5add.appspot.com",
    messagingSenderId: "263412463793",
    appId: "1:263412463793:web:855ae9a8425d63cb19ca90",
    measurementId: "G-ZZCVG51T8D"
  };

  firebase.initializeApp(firebaseConfig);
} else {
  // if already initialized, use that one
  firebase.app();
}

export const auth = firebase.auth();

export function singInWithGoogle() {
  const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

  return auth.signInWithPopup(GoogleAuthProvider);
}

export function singInWithEmailAndPassword(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function singUpWithEmailAndPassword(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function sendPasswordResetEmail(email) {
  return auth.sendPasswordResetEmail(email);
}

export function signOut() {
  return auth.signOut();
}

export function getCurrentUserToken() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.getIdToken();
}

export function getCurrentUserEmail() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.email;
}

export function getCurrentUser() {
  if (!auth.currentUser) {
    return null;
  }
  return auth.currentUser;
}