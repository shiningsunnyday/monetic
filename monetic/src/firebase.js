import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBj-NoryRQbB8B0WNA8K0Fq34W7_DfkkIU",
  authDomain: "monetic-b6e3f.firebaseapp.com",
  databaseURL: "https://monetic-b6e3f.firebaseio.com",
  projectId: "monetic-b6e3f",
  storageBucket: "monetic-b6e3f.appspot.com",
  messagingSenderId: "253278452376",
  appId: "1:253278452376:web:ea93a571a0da9ede2f6eed",
  measurementId: "G-7E8GL4YFE9"
};

firebase.initializeApp(config);
export default firebase;
