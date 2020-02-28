import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHlME3-BZ1DHmQgRkie9GpHYvmeyioxc0",
  authDomain: "lennon-wall-b7c37.firebaseapp.com",
  databaseURL: "https://lennon-wall-b7c37.firebaseio.com",
  projectId: "lennon-wall-b7c37",
  storageBucket: "lennon-wall-b7c37.appspot.com",
  messagingSenderId: "1062717709980",
  appId: "1:1062717709980:web:9c4a77719176d832881759",
  measurementId: "G-RPC8EM1M1V"
};

// Initialise Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
