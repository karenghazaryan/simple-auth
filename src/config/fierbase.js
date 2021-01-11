import firebase from "firebase";

const config = {
    apiKey: "AIzaSyAurFC7eG3D8npOQvgvgOOuczamSbp9zKM",
    authDomain: "vue-test-9a859.firebaseapp.com",
    projectId: "vue-test-9a859",
    storageBucket: "vue-test-9a859.appspot.com",
    messagingSenderId: "716510970581",
    appId: "1:716510970581:web:5f99bce0d3b4df3197d85c"
}

firebase.initializeApp(config);

const db = firebase.firestore()
const auth = firebase.auth()
const usersCollection = db.collection('users')

export {
    db,
    auth,
    usersCollection
}