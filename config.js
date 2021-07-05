import firebase from 'firebase';
require ("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyCZ88MeJ67Ilgl08vZ7YpDgZT5UJlUcBxc",
    authDomain: "project-wily.firebaseapp.com",
    projectId: "project-wily",
    storageBucket: "project-wily.appspot.com",
    messagingSenderId: "1086623322269",
    appId: "1:1086623322269:web:d14d3b6db6ca5a76eb8474"
  };

firebase.initializeApp(firebaseConfig);
export default firebase.firestore()