// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBXVc5GNbQdVaxHtDIraURVWSFrVOG9D3g",
    authDomain: "zitsby-e-commerce.firebaseapp.com",
    projectId: "zitsby-e-commerce",
    storageBucket: "zitsby-e-commerce.appspot.com",
    messagingSenderId: "110953884515",
    appId: "1:110953884515:web:5d44f3a0e2e60c5bacc156",
    measurementId: "G-3G18CJT57P"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db , auth};