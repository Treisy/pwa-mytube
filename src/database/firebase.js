import firebase from 'firebase'
import {API_KEY, AUTH_DOMAIN, DB_URL, MESSAGING_SENDER_ID, PROJECT_ID, STORAGE_BUCKET} from "./dev";

const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DB_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

export default firebase;