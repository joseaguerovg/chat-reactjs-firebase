import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAxWWc9BxcoWpYnxf5H5J8G0gFo8XMRCxo",
    authDomain: "chat-reactjs-d8ef7.firebaseapp.com",
    projectId: "chat-reactjs-d8ef7",
    storageBucket: "chat-reactjs-d8ef7.appspot.com",
    messagingSenderId: "884885558211",
    appId: "1:884885558211:web:8dd3ada836ebbb476ba376"
};

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();

export {
    db,
    firebase
}