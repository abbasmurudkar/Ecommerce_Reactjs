import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBWW-P4J5jnSk6_ckBI15GrjRmz7jgDYBY",
    authDomain: "ecommerce-6f7bd.firebaseapp.com",
    databaseURL: "https://ecommerce-6f7bd-default-rtdb.firebaseio.com",
    projectId: "ecommerce-6f7bd",
    storageBucket: "ecommerce-6f7bd.appspot.com",
    messagingSenderId: "726822796071",
    appId: "1:726822796071:web:7caf174a51f0e360228702"
  };
  const app = firebase.initializeApp(firebaseConfig);
  export const auth = app.auth();
  export const database = app.database();