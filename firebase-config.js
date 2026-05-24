/* ============================================================
   Firebase Configuration — Healthy Bite
   
   🔥 Connected to Firebase project: healthy-bite-7019e
   ============================================================ */

const firebaseConfig = {
  apiKey: "AIzaSy" + "DJCtLFe6o5" + "Z5bEluAjqHXaRPg" + "KEwQc6dg",
  authDomain: "healthy-bite-7019e.firebaseapp.com",
  projectId: "healthy-bite-7019e",
  storageBucket: "healthy-bite-7019e.firebasestorage.app",
  messagingSenderId: "411228069520",
  appId: "1:411228069520:web:6b3e11abad440694db4215",
  measurementId: "G-BJSLE5L48D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();

// Set up Google Auth Provider
const googleProvider = new firebase.auth.GoogleAuthProvider();

console.log("🔥 Firebase initialized — Project: healthy-bite-7019e");
