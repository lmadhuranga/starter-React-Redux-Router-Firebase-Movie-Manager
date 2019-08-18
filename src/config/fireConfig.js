import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const config  = {
  apiKey: "AIzaSyAQch9i77aVGVx0K60jCSQBOeESc9lvvxg",
  authDomain: "react-movie-manager.firebaseapp.com",
  databaseURL: "react-movie-manager.firebaseio.com",
  projectId: "react-movie-manager",
  storageBucket: "react-movie-manager.appspot.com"
};

firebase.initializeApp(config);
firebase.firestore()

export default firebase;
// https://react-redux-firebase.com/docs/v2-migration-guide.html