import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBKqKR41ffpyYMXZW9yaMy2w4fVWbAT7H0",
    authDomain: "netflix-build-cf488.firebaseapp.com",
    projectId: "netflix-build-cf488",
    storageBucket: "netflix-build-cf488.appspot.com",
    messagingSenderId: "999464917752",
    appId: "1:999464917752:web:60f688a2d6bb9aade4b90d",
    measurementId: "G-0LWPVPC0P1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  export {auth}
  export default db
