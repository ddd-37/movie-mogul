import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCCShNITY2hSLvmxaTQRt_avZ-9k0CO1Sw",
  authDomain: "movie-mogul-f3823.firebaseapp.com",
  databaseURL: "https://movie-mogul-f3823.firebaseio.com",
  projectId: "movie-mogul-f3823",
  storageBucket: "movie-mogul-f3823.appspot.com",
  messagingSenderId: "693809156342",
  appId: "1:693809156342:web:fd87d019c4ae0ad7501cd7",
  measurementId: "G-HVBEBL65PL",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export { firebase, db as default };
