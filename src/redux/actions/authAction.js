import { LOADING, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, LOADING_COMPLETE, REGISTER_SUCCESS, REGISTER_ERROR }  from './authTypes';
// import { appConfig } from '../../config/globel.conf';
// const entity = 'auths';
// const entityUrl = `${appConfig.app.host.url}/${entity}`;

export const login = (loginDetials) => {
    return (dispatch, getState, {getFirebase}) => {

        dispatch({type:  LOADING });
        const firebase = getFirebase();

        firebase.auth()
        .signInWithEmailAndPassword(
            loginDetials.email,
            loginDetials.password
            ).then( (res) => {
            dispatch({type: LOADING_COMPLETE });
            dispatch({ type:  LOGIN_SUCCESS });
            console.log('res',res);
        })
        .catch(err => {
            console.log('err',err);
            dispatch({type: LOADING_COMPLETE });
            dispatch({ type: LOGIN_ERROR, payload: err})
        });
    }

}

export const logOut = () => {

    return (dispatch, getState, {getFirebase}) =>{

        const firebase = getFirebase();
        firebase.auth()
        .signOut()
        .then( () => {
            dispatch({type: LOGOUT_SUCCESS })
        });
    }
}


export const register = (user) => {

    return (dispatch, getState, {getFirebase, getFirestore}) => {

        const firebase = getFirebase();
        const firestore = getFirestore();

        dispatch({type: "LOADING"});

        firebase.auth()
        .createUserWithEmailAndPassword(
            user.email,
            user.password
        )
        .then((response) => {
            return firestore.collection("users")
                .doc(response.user.uid).set({
                    name: user.name
                });
        })
        .then(() => {
            dispatch({type: LOADING_COMPLETE});
            dispatch({type: REGISTER_SUCCESS})
        })
        .catch((err) => {
            dispatch({type: LOADING_COMPLETE});
            dispatch({type: REGISTER_ERROR, payload: err});
        });
    }
}