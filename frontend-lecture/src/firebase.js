import * as firebase from "firebase/app";
import "firebase/auth";

// TODO(kai): Keep these things secret
const firebaseConfig = {
  apiKey: "AIzaSyBoFn-Rc3boYSvmxrfdfNyHSlqKby_Aqrg",
  authDomain: "lennon-wall-lecture.firebaseapp.com",
  databaseURL: "https://lennon-wall-lecture.firebaseio.com",
  projectId: "lennon-wall-lecture",
  storageBucket: "lennon-wall-lecture.appspot.com",
  messagingSenderId: "998835880959",
  appId: "1:998835880959:web:298350cf35d0a85ad91dca",
  measurementId: "G-5RGR3R60ZJ"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
