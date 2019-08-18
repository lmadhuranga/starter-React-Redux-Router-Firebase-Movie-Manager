import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase ,getFirebase } from 'react-redux-firebase';
import fireConfig from '../config/fireConfig';

const initialState = {};

// const middlewares = [thunk];

const store = createStore(
    rootReducer,    
    initialState,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(fireConfig),
        reactReduxFirebase(fireConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
    )

);

export default store;
