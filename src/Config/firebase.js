import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAVBEA8TdZrGARbTRTvEdCkc2HSWJSEBZU",
  authDomain: "curso-react-b8b9e.firebaseapp.com",
  projectId: "curso-react-b8b9e",
  storageBucket: "curso-react-b8b9e.appspot.com",
  messagingSenderId: "623530069835",
  appId: "1:623530069835:web:bb9660655e489b719a22ce"
};

firebase.initializeApp(firebaseConfig)

export default firebase