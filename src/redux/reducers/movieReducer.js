import { FETCH_MOVIES, NEW_MOVIE, VIEW_MOVIE, UPDATE_MOVIE, DELETE_MOVIE }  from '../actions/movieTypes';

const initialSate = {
    items: [],
    item: {}
}

export default function(state = initialSate, action) {
    // console.log('action',action.type ,action.payload);
    // console.log('initialSate',initialSate);
    switch(action.type) {
        case FETCH_MOVIES: 
            return {
                ...state,
                items: action.payload
            }
        case NEW_MOVIE: 
            return {
                ...state,
                item: action.payload
            }
        case UPDATE_MOVIE: 
            return {
                ...state,
                item: action.payload
            }
        case VIEW_MOVIE: 
            return {
                ...state,
                item: action.payload
            }
        case DELETE_MOVIE: 
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}