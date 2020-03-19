import firebase from 'firebase';
import 'firebase/auth'


const app = firebase.initializeApp({
    apiKey: "AIzaSyCm8lDwMww0fS_MsGhz8Bt1YuapfDq0z2Y",
    authDomain: "fir-react-3f23c.firebaseapp.com",
    databaseURL: "https://fir-react-3f23c.firebaseio.com",
    projectId: "fir-react-3f23c",
    storageBucket: "fir-react-3f23c.appspot.com",
    messagingSenderId: "836209887462",
    appId: "1:836209887462:web:3451d02d6b0884472b1327",
    measurementId: "G-VMQDDP22PH"
});

export default app;