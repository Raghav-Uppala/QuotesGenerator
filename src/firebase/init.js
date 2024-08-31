import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyAtxmbVqghDlp62uWw6ThzUnkwRp93xjTA",

  authDomain: "design-competition-2023.firebaseapp.com",

  projectId: "design-competition-2023",

  storageBucket: "design-competition-2023.appspot.com",

  messagingSenderId: "909122060320",

  appId: "1:909122060320:web:48dab278389768e9337c45",

  measurementId: "G-QMQ6LZ13XV"

};



initializeApp(firebaseConfig);

const db = getFirestore()
export default db