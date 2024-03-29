import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
import 'firebase/database';
import 'firebase/storage'

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAmurzdsM3geagB7WYT8GJpDKvoHj7G3FA",
  authDomain: "messenger-tintin.firebaseapp.com",
  databaseURL: "https://messenger-tintin.firebaseio.com",
  projectId: "messenger-tintin",
  storageBucket: "messenger-tintin.appspot.com",
  messagingSenderId: "383498967578"
}

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;