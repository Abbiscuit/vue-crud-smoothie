import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDdFKf3wA-2oBrPdzuXjJlSJThcTDpAf2w',
  authDomain: 'vue-firebase-kit100.firebaseapp.com',
  databaseURL: 'https://vue-firebase-kit100.firebaseio.com',
  projectId: 'vue-firebase-kit100',
  storageBucket: 'vue-firebase-kit100.appspot.com',
  messagingSenderId: '774321344447',
  appId: '1:774321344447:web:5fb5abd7b38b3737909b0a',
  measurementId: 'G-W8LRPF159E',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;
