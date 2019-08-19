import { CREATE_MOVIE, CREATE_MOVIE_ERROR,FETCH_MOVIES_ERROR, VIEW_MOVIE, UPDATE_COMPLETED, DELETE_MOVIE, FETCH_MOVIES }  from './movieTypes'; 
import { LOADING, LOADING_COMPLETE }  from './commonTypes'; 
// import { appConfig } from '../../config/globel.conf';
// const entityUrl = `${appConfig.app.host.url}/${entity}`;
const entity = 'movies';

export const fetchMovies = () => { 

    return (dispatch, getState, {getFirebase, getFirestore}) => {
        dispatch( {type: LOADING } );
        
        const firestore = getFirestore();
        firestore.collection(entity).get()
        .then(snapshot => {
            const movies = snapshot.docs.map(doc => { 
                let movie = doc.data(); 
                movie.id = doc.id;
                return movie;
            }); 
            dispatch( {type: LOADING_COMPLETE } );
            dispatch({type: FETCH_MOVIES, payload: movies});
        }).catch((err) => {

            dispatch({type: FETCH_MOVIES_ERROR, payload:err})
        })
         
    };
}


export const create = (movie) => {

    return (dispatch, getState, {getFirebase, getFirestore}) => {

        dispatch( {type: LOADING } );
        
        const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid; 
        
        firestore.collection(entity).add({            
            ...movie,
            // userName: profile.name,
            userId: userId,
            updateAt: new Date()
        }).then(() => { 
            dispatch( {type: LOADING_COMPLETE } );
            dispatch({type: CREATE_MOVIE, payload: movie});
        }).catch((err) => {

            dispatch({type: CREATE_MOVIE_ERROR, payload:err})
        })
    }
}

export const update = (id, formData) =>  {

    return (dispatch, getState, {getFirebase, getFirestore}) => {
        dispatch( {type: LOADING } );
        
        const firestore = getFirestore();
        firestore.collection(entity).doc(id).set(formData)
        .then(doc => {
            dispatch( {type: LOADING_COMPLETE } );
            dispatch({type: UPDATE_COMPLETED});
        }).catch((err) => { 
            dispatch({type: FETCH_MOVIES_ERROR, payload:err})
        })
         
    };
}

export const fetchMovie = (movieId) => { 

    return (dispatch, getState, {getFirebase, getFirestore}) => {

        dispatch( {type: LOADING } );
        
        const firestore = getFirestore();

        firestore.collection(entity).doc(movieId).get()
        .then(doc => { 
            const movie = doc.data(); 
            movie.id = doc.id; 
            dispatch( {type: LOADING_COMPLETE } );
            dispatch({type: VIEW_MOVIE, payload: movie});
        }).catch((err) => { 
            dispatch({type: FETCH_MOVIES_ERROR, payload:err})
        })
         
    };
}

export const deleteMovie = (id) =>  {
    
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        dispatch( {type: LOADING } );
        
        const firestore = getFirestore();
        firestore.collection(entity).doc(id).delete()
        .then(doc => {  
            dispatch( {type: LOADING_COMPLETE } );
            dispatch({type: DELETE_MOVIE}); 
        }).catch((err) => { 
            dispatch({type: FETCH_MOVIES_ERROR, payload:err})
        })
         
    };
}
 