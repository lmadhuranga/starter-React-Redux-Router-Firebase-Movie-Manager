import { LOADING, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, LOADING_COMPLETE, REGISTER_SUCCESS, REGISTER_ERROR }  from '../actions/authTypes';

const initialSate = {
    Error: null
}

export default function(state = initialSate, action) {

    switch(action.type){

        case LOADING:
            return {
                ...state,
                isLoading: true
            }
        
        case LOADING_COMPLETE:
            return {
                ...state,
                isLoading: false
            }
        
        case LOGIN_ERROR: 
            return {
                ...state,
                authError: action.payload
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                authError: null
            }

        case LOGOUT_SUCCESS:
            return state;

        case REGISTER_SUCCESS:
            return {
                ...state,
                authError: null
            };

        case REGISTER_ERROR:
            return {
                ...state,
                authError: action.payload
            }
        
        default:
            return state;
    }
} 