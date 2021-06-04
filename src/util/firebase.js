import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCLX3MMZAbGHegGkzpmgkNiixk3CxqGVpQ",
  authDomain: "fair-sandbox-136923.firebaseapp.com",
  databaseURL: "https://fair-sandbox-136923-default-rtdb.firebaseio.com",
  projectId: "fair-sandbox-136923",
  storageBucket: "fair-sandbox-136923.appspot.com",
  messagingSenderId: "373843808036",
  appId: "1:373843808036:web:840f44d3604d9d4f8aadb1",
  measurementId: "G-Q9Z5R2H1EE"
});

const auth = app.auth();

export {firebase, auth};