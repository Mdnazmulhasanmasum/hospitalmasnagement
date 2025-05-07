// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIXz2v2Mey5GYxbCDMbJgd7IubkAi8Q74",
  authDomain: "hospital-202e5.firebaseapp.com",
  projectId: "hospital-202e5",
  storageBucket: "hospital-202e5.firebasestorage.app",
  messagingSenderId: "1083991118598",
  appId: "1:1083991118598:web:df67a54522126c57678487"
};

// Initialize Firebase  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}


const handleLogin = (e) =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password)


    login(email, password)
    .then(result => console.log(result.user))
    .catch(error => console.error(error))
}
