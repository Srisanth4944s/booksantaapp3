import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAwUZkbScHZdvx_BMV2hkPInAeZgNe2yL0",
  authDomain: "booksantaapp-c782f.firebaseapp.com",
  projectId: "booksantaapp-c782f",
  storageBucket: "booksantaapp-c782f.appspot.com",
  messagingSenderId: "277451362924",
  appId: "1:277451362924:web:decef206af2e906e3efe49"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()