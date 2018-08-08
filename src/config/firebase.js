import firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyBBE1ZM2-Kb1DKVzh1bsA0ybGjSZ1kTJgQ',
  authDomain: 'mytube-212215.firebaseapp.com',
  databaseURL: 'https://mytube-212215.firebaseio.com',
  projectId: 'mytube-212215',
  storageBucket: 'mytube-212215.appspot.com',
  messagingSenderId: '508206592740'
};
firebase.initializeApp(config);
export default firebase;