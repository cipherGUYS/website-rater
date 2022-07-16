
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAuth, signInWithPopup,GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBxWd0UQOpBNVrVHJg7IiQvY65ag_dtMQY",
  authDomain: "website-rater-dee9c.firebaseapp.com",
  databaseURL: "https://website-rater-dee9c-default-rtdb.firebaseio.com",
  projectId: "website-rater-dee9c",
  storageBucket: "website-rater-dee9c.appspot.com",
  messagingSenderId: "181978904864",
  appId: "1:181978904864:web:5435aad37560004eadbf45",
  measurementId: "G-NW16W4D4C5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);

function authent(){
    console.log("started");
    signInWithPopup(auth, provider)
    .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(token);
    console.log(user);
    document.cookie=`token = ${token}`;
    document.cookie=`user_name = ${user.displayName}`;
    document.cookie=`email = ${user.email} `;
    document.cookie=`phone = ${user.phoneNumber}`;
    document.cookie=`pic=${user.photoURL}`;
    window.location.assign('./profile.html');
    }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
}

if(
    document.getElementById('google')){
        document.getElementById('google').addEventListener("click",()=>{authent();});}
        


