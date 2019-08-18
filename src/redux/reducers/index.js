import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

export default combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    movies: movieReducer, 
}) 

