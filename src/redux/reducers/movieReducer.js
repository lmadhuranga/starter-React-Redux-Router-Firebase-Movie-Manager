import { FETCH_MOVIES, CREATE_MOVIE, VIEW_MOVIE, UPDATE_MOVIE, DELETE_MOVIE, UPDATE_COMPLETED  }  from '../actions/movieTypes';

const initialSate = {
    items: [],
    item: {},
    isLoading: false,
    isUpdate: false
}

export default function(state = initialSate, action) {
    
    switch(action.type) {
        case FETCH_MOVIES: 
            return {
                ...state,
                items: action.payload
            }
        case CREATE_MOVIE: 
            return {
                ...state,
                item: action.payload
            }
        case UPDATE_MOVIE: 
            return {
                ...state,
                isUpdate: true 
            }
        case UPDATE_COMPLETED: 
            return {
                ...state,
                isUpdate: true 
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