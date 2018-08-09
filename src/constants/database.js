import firebase from "../config/firebase";

const DB_REF = firebase.database().ref();
export const VIDEO = DB_REF.child('videos');
export const REF_VIDEOS = firebase.database().ref('videos');