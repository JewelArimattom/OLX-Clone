import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsOKEkb3YwTj06bYMSuat9LI8f9o9TnyE",
    authDomain: "olx-clone-626b5.firebaseapp.com",
    projectId: "olx-clone-626b5",
    storageBucket: "olx-clone-626b5.appspot.com",
    messagingSenderId: "570107933783",
    appId: "1:570107933783:web:50865c778d7011dabb1f12",
    measurementId: "G-2QW0V3HDML"
  };

export default firebase.initializeApp(firebaseConfig)
