import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcBK1-uLP7DNzcPBYaZVdh1khpUoVFhcQ",
  authDomain: "clone-d4c16.firebaseapp.com",
  databaseURL: "https://clone-d4c16.firebaseio.com",
  projectId: "clone-d4c16",
  storageBucket: "clone-d4c16.appspot.com",
  messagingSenderId: "19541260271",
  appId: "1:19541260271:web:541512d84b454eb803681a",
  measurementId: "G-25DJ1LPWFJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
