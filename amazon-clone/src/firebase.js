import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD0ipESFeO9cAnRftLIQ-Uw2dKcUvuDYpw",
    authDomain: "clone-a6390.firebaseapp.com",
    databaseURL: "https://clone-a6390.firebaseio.com",
    projectId: "clone-a6390",
    storageBucket: "clone-a6390.appspot.com",
    messagingSenderId: "80377811878",
    appId: "1:80377811878:web:78a11cfda221aa43aab567",
    measurementId: "G-KNZH6BSZ4B"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };